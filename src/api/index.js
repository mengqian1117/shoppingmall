import axios from "axios";
axios.defaults.baseURL="https://www.easy-mock.com/mock/5b120c498cd63333d30a6c27/example";
axios.interceptors.response.use((res)=>res.data.data);
export let getData=()=>{
  return axios.get("/index");
}
