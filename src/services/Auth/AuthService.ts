import { api } from '../api'

const path = "auth"

export const AuthService = {

  login(data: object){
    return api.post(`${path}/login`, data)
  },
  
  test(){
    return  api.get(`/`)
  }

}