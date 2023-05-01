import { Container, Banner, LoginForm, Title } from './styles'
import Input from '../../../components/Input'
import ButtonSubmit from '../../../components/ButtonSubmit';
import { AuthService } from '../../../services/Auth/AuthService';

export default function Login(){

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
		<Container>
			<Banner>
				teste
			</Banner>
			<LoginForm onSubmit={(event) => handleSubmit(event)}>
				<div>
					<Title>Login</Title>
				</div>
				<div className="input-container">
					<Input type="email" name="email" id="email" placeholder="Email" />
					<Input type="password" name="password" id="password" placeholder="Senha" />
				</div>
				<ButtonSubmit type="submit" variant="outlined" text="Entrar" />
				<a href="/register">Registrar-se</a>
			</LoginForm>
		</Container>
	);
}