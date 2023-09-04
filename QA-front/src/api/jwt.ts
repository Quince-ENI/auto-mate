const LOCAL_STORAGE_KEY = 'jwtToken';

export function getToken(): string | null {
  return localStorage.getItem(LOCAL_STORAGE_KEY);
}

export function storeToken(jwtToken: string): void {
  localStorage.setItem(LOCAL_STORAGE_KEY, jwtToken);
}

export function removeToken(): void {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
