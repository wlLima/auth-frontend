import { createContext } from "react";
import { Auth } from '../interfaces/AuthInterface'

interface AuxProps{
  children: React.ReactNode
}

export const AuthContext = createContext<Auth | null>(null)

export default function AuthProvider({children}: AuxProps){

  
  return(
    <AuthContext.Provider value={null}>
      {children}
    </AuthContext.Provider>
  )

}