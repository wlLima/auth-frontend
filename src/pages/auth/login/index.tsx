import { Container, Banner, LoginForm, Title } from './styles'
import Input from '../../../components/Input'
import ButtonSubmit from '../../../components/ButtonSubmit';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/Auth';
import Icon from '../../../assets/Fingerprint-bro.svg'

export default function Login(){

	const Auth = useContext(AuthContext)

	return(
		<Container>
			<Banner>
				<img src={Icon} alt="teste" className='banner-image'/>
			</Banner>
			<LoginForm onSubmit={(event) => Auth?.handleSubmit(event)}>
				<div>
					<Title>Login</Title>
				</div>
				<div className="input-container">
					<Input type="email" name="email" id="email" placeholder="Email" />
					<Input type="password" name="password" id="password" placeholder="Senha" />
				</div>
				<ButtonSubmit type="submit" text="Entrar" />
				<a href="/register">Registrar-se</a>
			</LoginForm>
		</Container>
	);
}