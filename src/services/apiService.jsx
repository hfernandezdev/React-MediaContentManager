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

export const fetchContent = async () => {
  const response = await api.get('/contents',{headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjY0ZTg1NzI5OTdjNjQ5OWViMWNmZTciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTc5NTkyMDQsImV4cCI6MTcxNzk2MjgwNH0.X6lJyUzuFY9XdgqhVlt9nLb3m8qaEspg8yos2eCGtMM"}});
  return response.data;
};
