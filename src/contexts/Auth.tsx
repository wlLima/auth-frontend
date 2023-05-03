import { createContext } from "react";
import { Auth } from '../interfaces/AuthInterface'
import { AuthService } from "../services/Auth/AuthService";

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
			console.log(response)
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