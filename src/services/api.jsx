import axios from 'axios';

const API_URL = 'https://api.mercadolibre.com';

export const searchProducts = (query) => {
  return axios.get(`${API_URL}/sites/MLA/search?q=${query}`);
};

export const getProductDetail = (id) => {
  return axios.get(`${API_URL}/items/${id}`);
};

//Aunque podríamos hacer todas las llamadas API directamente en los componentes, es una buena práctica separar la lógica de API en un servicio.