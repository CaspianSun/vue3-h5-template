import axios, { AxiosRequestConfig, AxiosInstance as OriginAxiosInstance } from 'axios'

const baseURL = import.meta.env.VITE_API_URL
const timeout = 20000
const successStatus = [200, 0, '200', '0']
const statusName = 'status'
const messageName = 'message'
const contentType = 'application/json'

type ResponseType<T> = T extends BaseResponse ? T : unknown extends T ? BaseResponseWithData<any> : BaseResponseWithData<T>

interface AxiosInstance extends OriginAxiosInstance {
  <T = unknown, R = ResponseType<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>
  <T = unknown, R = ResponseType<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
  get<T = unknown, R = ResponseType<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
  delete<T = number, R = ResponseType<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
  post<T = unknown, R = ResponseType<T>, D = any>(url: string, data?: any, config?: AxiosRequestConfig<D>): Promise<R>
  put<T = number[], R = ResponseType<T>, D = any>(url: string, data?: any, config?: AxiosRequestConfig<D>): Promise<R>
}

const service = axios.create({
  baseURL,
  timeout,
  headers: {
    'Content-Type': contentType,
  },
  withCredentials: true,
}) as AxiosInstance

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  (response) => {
    const { data, status: _status } = response
    let status = data && data[statusName] ? data[statusName] : _status
    if (successStatus.includes(status)) status = 200
    switch (status) {
      case 200:
        return Promise.resolve(data)
      default:
        return Promise.reject(new Error(data[messageName]))
    }
  },
  (error) => {
    const { response } = error
    switch (response?.status) {
      case 400:
      case 401:
        return Promise.resolve(response.data)
      default:
        return Promise.reject(error)
    }
  }
)

export default {
  get<T = unknown>(config: AxiosRequestConfig) {
    return service<T>({
      ...config,
      method: 'GET',
    })
  },
  post<T = unknown>(config: AxiosRequestConfig) {
    return service<T>({
      ...config,
      method: 'POST',
    })
  },
  put<T = unknown>(config: AxiosRequestConfig) {
    return service<T>({
      ...config,
      method: 'PUT',
    })
  },
  delete<T = unknown>(config: AxiosRequestConfig) {
    return service<T>({
      ...config,
      method: 'DELETE',
    })
  },
}
