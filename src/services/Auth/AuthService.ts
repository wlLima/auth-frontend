import { api } from '../api'

const path = "auth"

export const AuthService = {

  login(data: object){
    return api.post(`${path}/login`, data)
  },

  register(data: object){
    return api.post(`${path}/register`, data)
  },
  
  test(){
    return  api.get(`/`)
  }

}