export const api = process.env.REACT_APP_API_URL;
console.log(api);
export const uploads = `${api}/uploads`;

export function requestConfig(method, data, token = null, image = null) {
  let config;

  if (image) {
    config = {
      method,
      body: data,
      headers: {}
    };
  } else if (method === 'DELETE' || data === null) {
    config = {
      method,
      headers: {}
    };
  } else {
    config = {
      method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}
