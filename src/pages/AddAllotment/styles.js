import styled from "styled-components";

export const Container = styled.div`
  background: #03172f;

  form {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  input,
  textarea,
  select {
    width: 80%;
    height: 40px;
    border: 0;
    margin: 10px auto;
    padding-left: 8px;
    border-radius: 5px;
  }

  textarea {
    padding-top: 8px;
  }

  input[type="file"] {
    display: none;
  }
  label {
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border: 0;
    margin: 10px auto;
    border-radius: 5px;
    color: #fff;
    background: #4bbdd8;
  }

  p {
    text-align: center;
    padding: 20px 0;
    color: #fff;
    text-transform: uppercase;
    font-size: 20px;
  }

  img.logo {
    width: 150px;
    margin: 10px auto;
  }

  .images {
    /* background:red; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img {
      width: calc(25% - 40px);
      margin: 5px;
    }
  }

  button {
    width: 120px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border: 0;
    margin: 10px auto;
    border-radius: 5px;
    background: #4bbdd8;
    text-transform: uppercase;
  }
`;
