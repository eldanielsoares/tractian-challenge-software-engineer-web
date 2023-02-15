import axios from "axios";


const http = axios.create({
  baseURL: 'https://my-json-server.typicode.com/tractian/fake-api'
})

export default http;