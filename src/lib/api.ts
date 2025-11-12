// Flask API integration layer
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

// Generic fetch wrapper
async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { data, success: true };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'An error occurred',
      success: false,
    };
  }
}

// Athletes API
export const athletesAPI = {
  getAll: () => fetchAPI('/athletes'),
  getById: (id: number) => fetchAPI(`/athletes/${id}`),
  create: (data: any) => fetchAPI('/athletes', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: number, data: any) => fetchAPI(`/athletes/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id: number) => fetchAPI(`/athletes/${id}`, { method: 'DELETE' }),
};

// Countries API
export const countriesAPI = {
  getAll: () => fetchAPI('/countries'),
  getById: (id: number) => fetchAPI(`/countries/${id}`),
  create: (data: any) => fetchAPI('/countries', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: number, data: any) => fetchAPI(`/countries/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id: number) => fetchAPI(`/countries/${id}`, { method: 'DELETE' }),
};

// Events API
export const eventsAPI = {
  getAll: () => fetchAPI('/events'),
  getById: (id: number) => fetchAPI(`/events/${id}`),
  create: (data: any) => fetchAPI('/events', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: number, data: any) => fetchAPI(`/events/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id: number) => fetchAPI(`/events/${id}`, { method: 'DELETE' }),
};

// Medals API
export const medalsAPI = {
  getAll: () => fetchAPI('/medals'),
  getById: (id: number) => fetchAPI(`/medals/${id}`),
  create: (data: any) => fetchAPI('/medals', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: number, data: any) => fetchAPI(`/medals/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id: number) => fetchAPI(`/medals/${id}`, { method: 'DELETE' }),
};

// Reports API
export const reportsAPI = {
  getFunctions: () => fetchAPI('/reports/functions'),
  getTriggers: () => fetchAPI('/reports/triggers'),
  getCursors: () => fetchAPI('/reports/cursors'),
};

// Check server connection
export async function checkServerConnection(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.ok;
  } catch {
    return false;
  }
}
