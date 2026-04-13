const BASE_URL = import.meta.env.DEV
  ? '/api'
  : import.meta.env.VITE_API_BASE_URL;

export async function apiClient(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.text();

  try {
    return JSON.parse(data);
  } catch (e) {
    console.error('NOT JSON RESPONSE:', data);
    throw e;
  }
}
