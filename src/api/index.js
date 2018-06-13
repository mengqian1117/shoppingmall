//使用axios 请求数据
import axios from "axios"
//配置基础路径
axios.defaults.baseURL=" https://www.easy-mock.com/mock/5b20c7b9bf99c32d68c0b6f4/shoppingmall";
axios.interceptors.response.use((res)=>res.data.data);
export let getSlidesData=()=>{
  return axios.get("/slides");
};
export let getCategoryData=()=>{
  return axios.get("/category");
};
export let getRecommendData=()=>{
  return  axios.get("/recommend");
};
export let getHotGoodsData=()=>{
  return axios.get('/hotgoods');
};
export let getAdvertesPicture=()=>{
  return axios.get("/advertesPicture");
};
export let getFloorData=()=>{
  return axios.get("/floor");
}
