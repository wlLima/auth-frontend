import { RegisterForm, Container, Banner, Title } from './styles'
import Input from '../../../components/Input'
import ButtonSubmit from '../../../components/ButtonSubmit';
import Icon from '../../../assets/Fingerprint-bro.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/Auth';

export default function Register(){

	const Auth = useContext(AuthContext)

    return(
			<Container>
				<Banner>
					<img src={Icon} alt="teste" className='banner-image'/>
				</Banner>
				<RegisterForm onSubmit={(event) => Auth?.handleRegister(event)}>
						<div>
								<Title>Registro</Title>
						</div>
						<div className='input-container'>
								<Input type="text" name="username" id="username" placeholder="Nome" />
								<Input type="email" name="email" id="email" placeholder="Email"/>
								<Input type="date" name="born" id="born" placeholder="Data de Nascimento"/>
								<Input type="password" name="password" id="password" placeholder="Senha"/>
						</div>
						<ButtonSubmit type="submit" text="Registrar">Registrar</ButtonSubmit>
						<a href="/">Voltar</a>
				</RegisterForm>
			</Container>
    );
}