import { RegisterForm, Container, Banner, Title } from './styles'
import Input from '../../../components/Input'
import ButtonSubmit from '../../../components/ButtonSubmit';
import Icon from '../../../assets/Fingerprint-bro.svg'

export default function Register(){
    return(
			<Container>
				<Banner>
					<img src={Icon} alt="teste" className='banner-image'/>
				</Banner>
				<RegisterForm>
						<div>
								<Title>Registro</Title>
						</div>
						<div className='input-container'>
								<Input type="text" name="name" id="name" placeholder="Nome" />
								<Input type="email" name="email" id="email" placeholder="Email"/>
								<Input type="password" name="password" id="password" placeholder="Senha"/>
						</div>
						<ButtonSubmit type="submit" text="Registrar">Registrar</ButtonSubmit>
						<a href="/">Voltar</a>
				</RegisterForm>
			</Container>
    );
}