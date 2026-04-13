const BASE_URL = '/api';

console.log('ENV BASE URL:', BASE_URL);

export async function apiClient(endpoint) {
  const url = `${BASE_URL}${endpoint}`;
  console.log('FINAL URL:', url);

  const response = await fetch(url);
  return await response.json();
}
