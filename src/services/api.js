import axios from 'axios';
const apiService = {
  getRandomUsers() {
    return axios.get('https://randomuser.me/api/?results=10');
  },
  getUsers() {
    return axios.get('http://localhost:2000/users');
  },
  sendUsers(payload) {
    return axios.post('http://localhost:2000/users', payload);
  },
  getUser(id) {
    return axios.get(`http://localhost:2000/users/${id}`);
  },
};
export default apiService;