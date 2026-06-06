import axios from 'axios';

const API_URL = 'https://06nwru8m2b.execute-api.us-east-1.amazonaws.com/pod/recommendations';

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchRecommendations = async () => {
  const response = await api.get('/recommendations');
  return response.data;
};
