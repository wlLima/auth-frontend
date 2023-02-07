import { Container } from './styles'

export default function Login(){
    return(
        <Container>
            <div>
                <h2>Login</h2>
            </div>
            <div>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <input type="password" name="password" id="password" placeholder="Senha" />
            </div>
            <button type="submit">Entrar</button>
            <a href="/register">Registrar-se</a>
        </Container>
    );
}