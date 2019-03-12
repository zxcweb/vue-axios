import axios from 'axios';
import { Loading } from 'element-ui';

//声明一个loading空变量
let loadingIsShow = null;
// 新创建一个axios实例，并进行基础配置
var instance = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/161631/api',
  timeout: 2000,
  // headers: {'X-Requested-With': 'XMLHttpRequest'}
});

// 添加请求拦截器
instance.interceptors.request.use((config)=>{
  // 再次设置tkoen或者添加loading等请求前的操作
  // 添加一个loading
  loadingIsShow = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  return config;
})

// 添加xi响应拦截器
instance.interceptors.response.use(
  (response)=>{
    //响应数据后做点什么
    // 请求成功关闭loading
    loadingIsShow.close();
    return response;
  },
  (error)=>{
    // 对响应错误做点什么
    return Promise.reject(error);
  }
)


/**
 * get请求
 * @method get
 * @param {url, params, loading} 请求地址，请求参数，是否需要加载层
 */
var get = function(url, params) {
  return new Promise((resolve, reject) => {
    // {
    //   params: params
    // }
    instance
      .get(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
/**
 * post请求
 * @method post
 * @param {url, params} 请求地址，请求参数，是否需要加载层
 */
var post = function(url, data) {
  return new Promise((resolve, reject) => {
    // qs.stringify(data)
    instance
      .post(url, data)
      .then(res => {
        console.log(res);
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
export default { get, post };
