import { createContext } from "react";
import { Auth } from '../interfaces/AuthInterface'
import { AuthService } from "../services/Auth/AuthService";
import Toast from '../utils/toast'
import axios from 'axios';

interface AuxProps{
  children: React.ReactNode
}

export const AuthContext = createContext<Auth | null>(null)

export default function AuthProvider({children}: AuxProps){

  function handleLogin(event: React.FormEvent<HTMLFormElement>){
		event.preventDefault()

		const {email, password } = document.forms[0]
		
		const data = {
			email: email.value,
			password: password.value
		}
		
		AuthService.login(data).then((response) => {

				if(response.status === 200){
					const { access_token, ...userData } = response.data 
					
					localStorage.setItem('token', access_token)
					localStorage.setItem('user', JSON.stringify(userData))
					axios.defaults.headers.common = {'Authorization': `Bearer ${access_token}`}
					window.location.replace(`${window.location.href}home`);
				}

		}).catch((error) =>{
			error.response.status === 401 && Toast.error("Email ou senha estão incorretos!")
		})
	}

	function handleRegister(event: React.FormEvent<HTMLFormElement>){
		event.preventDefault()

		const { born, username, email, password } = document.forms[0]

		const data = {
			name: username.value,
			email: email.value,
			password: password.value,
			born: born.value
		}

		AuthService.register(data).then((response) => {
			console.log(response.data);
		})

	}
  
  return(
    <AuthContext.Provider value={{handleLogin, handleRegister}}>
      {children}
    </AuthContext.Provider>
  )

}