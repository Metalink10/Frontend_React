import {FaUser, FaLock} from "react-icons/fa";

import { useState } from "react";
import "./Login.css"


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(username, password);
  }

  return (
    <>
        <div className="container">
            <form onSubmit={handleSubmit} >
            <h1>Acesse o sistema</h1>
              <div>
                <input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)} />
                <FaUser className="icon-user" />
              </div>
              <div>
                <input type="password" placeholder='Isira sua senha'  onChange={(e) => setPassword(e.target.value)} />
                <FaLock className="icon-lock" />
              </div>

              <div className="recall-forget">
                <label htmlFor="">
                  <input type="checkbox" />
                  Lembrar de mim
                </label>
                <a href="#"> Esqueceu a senha?</a>
              </div>

              <button>Entrar</button>

              <div className="signup-link"></div>
                <p>
                  Não tem uma conta? <a href="#">Registrar</a>
                </p>
            </form>
        </div>
    </>
  )
}

export default Login