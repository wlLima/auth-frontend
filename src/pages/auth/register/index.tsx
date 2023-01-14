export default function Register(){
    return(
        <div>
            <input type="text" name="name" id="name" placeholder="Nome" />
            <input type="email" name="email" id="email" placeholder="Email"/>
            <input type="password" name="password" id="password" placeholder="Senha"/>
            <button type="submit">Registrar</button>
            <a href="/">Voltar</a>
        </div>
    );
}