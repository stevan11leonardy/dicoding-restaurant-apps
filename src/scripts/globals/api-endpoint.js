import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: `${CONFIG.BASE_URL}detail/`,
  ADD_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
