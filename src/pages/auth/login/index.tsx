import { Container, Banner, LoginForm, Title } from './styles'
import Input from '../../../components/Input'
import ButtonSubmit from '../../../components/ButtonSubmit';

export default function Login(){
    return(
			<Container>
				<Banner>
					teste
				</Banner>
				<LoginForm>
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