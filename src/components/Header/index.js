import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const Header = ({ active }) => {
  const changeClasseActive = (item, e) => {};

  useEffect(() => {
    if (active !== undefined) {
      document.querySelector(`.${active}`).classList.add("select");
    }
  }, [active]);

  return (
    <Container>
      <Link to="/painel">
        <span style={{ color: "#fff" }}>Painel</span>
      </Link>
      <ul>
        <Link to="/painel/add">
          <li className="add ">Adicionar</li>
        </Link>
        <Link to="/painel/edit">
          <li className="edit ">Editar</li>
        </Link>
        <Link to="/painel/remove">
          <li className="remove ">Remover</li>
        </Link>
      </ul>
    </Container>
  );
};

export default Header;
