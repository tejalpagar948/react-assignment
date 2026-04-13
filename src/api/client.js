const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiClient(endpoint) {
  const url = `${BASE_URL}${endpoint}`;

  console.log('API CALL:', url);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return await response.json();
}
