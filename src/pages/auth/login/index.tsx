export default function Login(){
    return(
        <div>
            <input type="text" name="email" id="email" />
            <input type="password" name="password" id="password" />
            <button type="submit">Entrar</button>
            <a href="/register">Registrar-se</a>
        </div>
    );
}