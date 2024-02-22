import axios from "axios";
const BASE_REST_API_URL = 'http://localhost:8889/api/todos';
export const getAllTodos = () => axios.get(BASE_REST_API_URL);