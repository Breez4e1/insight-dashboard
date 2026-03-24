import axios from 'axios'

/**
 * Axios 实例
 * baseURL 从环境变量读取，本地开发时可以在 .env.local 里配置：
 *   VITE_API_BASE_URL=http://localhost:8080/api
 */
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
})

// 请求拦截器：可在此统一附加 Token
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器：统一处理错误
request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('[API Error]', error.message)
    return Promise.reject(error)
  }
)

export default request
