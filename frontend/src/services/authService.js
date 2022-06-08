import { api, requestConfig } from '../utils/config';

// Register an user
async function register(data) {
  const config = requestConfig('POST', data);

  try {
    const res = await fetch(`${api}/users/register`, config)
      .then(res => res.json())
      .catch(err => err);

    if (res._id) {
      localStorage.setItem('user', JSON.stringify(res));
    }

    return res;
  } catch (error) {
    console.log(error);
  }
}

// Logout an user
function logout() {
  localStorage.removeItem('user');
}

// Sign in an user
async function login(data) {
  const config = requestConfig('POST', data);
  console.log(config);

  try {
    const res = await fetch(`${api}/users/login`, config).then(res =>
      res.json().catch(err => err)
    );

    if (res._id) {
      localStorage.setItem('user', JSON.stringify(res));
    }

    return res;
  } catch (error) {
    console.log(error);
  }
}

export const authService = {
  register,
  logout,
  login
};
