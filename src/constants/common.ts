export const ROOT_URL = import.meta.env.VITE_ROOT_URL || 'http://localhost:3000/';

export const ENDPOINTS = Object.freeze({
  PRODUCTS: `${ROOT_URL}api/products`,
  // Thêm các endpoint khác ở đây
});
