import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const loginUser = async (username, password) => {
  const response = await api.post('/auth/login', { username, password });
  return response.data;
};

export const registerUser = async (username, email, password, role) => {
  const response = await api.post('/auth/register', { username, email, password, role });
  return response.data;
};
