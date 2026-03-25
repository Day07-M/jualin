import { BACKEND_API } from '../../config';

export async function getSession() {
  const res = await fetch(`${BACKEND_API}/api/auth/get-session`, { credentials: "include", });

  if (!res.ok) return null;

  return res.json();
}
