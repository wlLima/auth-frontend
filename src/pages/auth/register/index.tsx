import { Container } from './styles'

export default function Register(){
    return(
        <Container>
            <div>
                <h2>Registro</h2>
            </div>
            <div>
                <input type="text" name="name" id="name" placeholder="Nome" />
                <input type="email" name="email" id="email" placeholder="Email"/>
                <input type="password" name="password" id="password" placeholder="Senha"/>
            </div>
            <button type="submit">Registrar</button>
            <a href="/">Voltar</a>
        </Container>
    );
}