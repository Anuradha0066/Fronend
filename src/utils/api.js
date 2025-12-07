const BASE_URL = 'https://backend-nine-mocha-94.vercel.app'; // backend URL

export async function fetchWithAuth(endpoint) {
  const token = localStorage.getItem('staffToken');
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Unauthorized');
  return res.json();
}
