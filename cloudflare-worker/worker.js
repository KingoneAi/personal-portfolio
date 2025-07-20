addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const SECRET = 'your-secret'; // 加密码
const SALT = 'your-salt'; // 盐

function getTodayCode() {
  const date = new Date().toISOString().slice(0, 10); // yyyy-mm-dd
  return btoa(`${date}:${SECRET}:${SALT}`).slice(0, 6).toUpperCase();
}

async function handleRequest(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const todayCode = getTodayCode();
  if (code && code.toUpperCase() === todayCode) {
    return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });
  } else {
    return new Response(JSON.stringify({ ok: false }), { headers: { 'Content-Type': 'application/json' } });
  }
} 