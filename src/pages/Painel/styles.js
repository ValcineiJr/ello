import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: #03172f;

  .welcome {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
  }

  h1 {
    color: #fff;
    text-align: center;
    text-transform: uppercase;
  }

  input {
    height: 40px;
    padding-left: 14px;
    margin: 10px 0;
  }
`;
