import { apiClient } from './client';

export const homeApi = {
  getBanners: () => apiClient('/load_banners'),

  getServices: () => apiClient('/load_services_blogs?service_choice=services'),

  getBlogs: () => apiClient('/load_services_blogs?service_choice=blogs'),
};
