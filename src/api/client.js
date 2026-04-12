const BASE_URL = '/api';

export async function apiClient(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  return await response.json();
}
