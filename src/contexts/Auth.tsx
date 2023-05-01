import { createContext } from "react";
import { Auth } from '../interfaces/AuthInterface'
import { AuthService } from "../services/Auth/AuthService";

interface AuxProps{
  children: React.ReactNode
}

export const AuthContext = createContext<Auth | null>(null)

export default function AuthProvider({children}: AuxProps){

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
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
  
  return(
    <AuthContext.Provider value={{handleSubmit}}>
      {children}
    </AuthContext.Provider>
  )

}