import { useState } from "react";
import { Link } from "react-router-dom";

import "./signin.css";
import logo from "../../assets/logo.png";

const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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
                    <h1>Entrar</h1>
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
                    <button type="submit">Acessar</button>
                </form>
                <Link to="/register">Cadastre-se</Link>
            </div>
        </div>
    );
};

export default SignIn;
