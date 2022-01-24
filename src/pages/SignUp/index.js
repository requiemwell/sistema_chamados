import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [nome, setNome] = useState();

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert('clicou')
    }

    return (
        <div className="container-center">
            <div className="login-area">
                <div className="logo">
                    <img src={logo} alt="logo do sistema" />
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Cadastrar uma conta</h1>
                    <input
                        type="text"
                        value={nome}
                        placeholder="seu nome"
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        type="text"
                        value={email}
                        placeholder="exemplo@ggm.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        value={password}
                        placeholder="*****"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Cadastrar</button>
                </form>
                <Link to="/">Já possuo cadastro</Link>
            </div>
        </div>
    );
};

export default SignUp;
