import styled from "styled-components";

export const Container = styled.div``;
export const Body = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: #03172f;

  table {
    margin-top: 100px;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    background: #fff;
  }

  td {
    text-align: center;
  }
  a {
    color: #dc3545;
    cursor: pointer;
  }
`;
