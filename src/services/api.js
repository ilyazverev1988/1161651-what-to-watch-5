import axios from "axios";

const BACKEND_URL = `https://5.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

// eslint-disable-next-line no-unused-vars
const HttpCode = {
  UNAUTHORIZED: 401
};

// eslint-disable-next-line no-unused-vars
export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    // eslint-disable-next-line no-unused-vars
    const {response} = err;
    /*
    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();

      throw err;
    }*/

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
