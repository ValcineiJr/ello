import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import { Container, Body } from "./styles";

const RemoveAllotment = () => {
  const [lots, setLots] = useState([]);

  const loadLots = async () => {
    const response = await api.get("allotments");

    setLots(response.data);
  };

  useEffect(() => {
    loadLots();
  }, []);

  const removeAllotment = async (id, name) => {
    const removeConfirm = window.confirm("Realmente excluir ?");

    if (removeConfirm) {
      await api.delete(`allotment/remove/${id}/${name}`);
      loadLots();
    }
  };

  return (
    <Container>
      <Header active="remove" />
      <Body>
        <table>
          <tr>
            <th>Lote</th>
            <th>Exlcuir</th>
          </tr>
          {lots.map((lot) => (
            <tr key={lot._id}>
              <td>{lot.name}</td>
              <td>
                <a onClick={() => removeAllotment(lot._id, lot.name)}>
                  <i class="fas fa-trash-alt"></i>
                </a>
              </td>
            </tr>
          ))}
        </table>
      </Body>
    </Container>
  );
};

export default RemoveAllotment;
