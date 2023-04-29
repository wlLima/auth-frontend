import {TextField} from './styles'

export default function Input(props: any){
  return(
    <TextField type={props.type} name={props.email} id={props.id} placeholder={props.placeholder}/>
  )
}