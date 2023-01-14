export default function Login(){
    return(
        <div>
            <input type="email" name="email" id="email" placeholder="Email"/>
            <input type="password" name="password" id="password" placeholder="Senha" />
            <button type="submit">Entrar</button>
            <a href="/register">Registrar-se</a>
        </div>
    );
}