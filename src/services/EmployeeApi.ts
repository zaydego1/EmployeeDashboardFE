import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Your Spring Boot endpoint

export const fetchEmployees = async () => {
  try {
    const response = await axios.get(`${API_URL}/employees`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw new Error('Failed to fetch employees. Please try again later.');
  }
};