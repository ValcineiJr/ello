import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Container } from "./styles";
import api from "../../services/api";

function Painel() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(localStorage.getItem("@login/token"));

  const send = async (e) => {
    e.preventDefault();
    const response = await api.post("login", { username, password });

    if (response.data.msg === "Sucesso") {
      localStorage.setItem("@login/token", true);
      setLogin(true);
    } else {
      alert(response.data.msg);
    }
  };

  useEffect(() => {
    // localStorage.clear();
  }, []);

  return (
    <Container>
      {login && <Header />}

      {!login && (
        <div className="welcome">
          <form method="post" onSubmit={send}>
            <h1>Login</h1>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Usuário"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
            <input type="submit" value="Entrar" />
          </form>
        </div>
      )}
    </Container>
  );
}

export default Painel;
