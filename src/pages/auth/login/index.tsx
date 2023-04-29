import { Container, Banner, LoginForm, Title } from './styles'
import Button from '@mui/material/Button';
import Input from '../../../components/Input'

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
					<div>
						<Input type="email" name="email" id="email" placeholder="Email" />
						<Input type="password" name="password" id="password" placeholder="Senha" />
					</div>
					<Button type="submit" variant="outlined">Entrar</Button>
					<a href="/register">Registrar-se</a>
				</LoginForm>
			</Container>
    );
}