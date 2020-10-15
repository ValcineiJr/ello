import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";

const Login = () => {
  const history = useHistory();

  const logIn = (e) => {
    e.preventDefault();
    history.push("/panel");
  };

  return (
    <Container>
      <div className="form">
        <input type="text" placeholder="Usuário" name="username" />
        <input type="password" placeholder="Senha" name="password" />
        <input onClick={logIn} type="submit" value="Entrar" />
      </div>
    </Container>
  );
};

export default Login;
