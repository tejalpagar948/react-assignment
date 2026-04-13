const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiClient(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  return await response.json();
}
