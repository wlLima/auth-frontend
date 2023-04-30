import { Button } from './styles'

export default function ButtonSubmit(props: any){
  return(
    <Button type="submit">{props.text}</Button>
  )
}