import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: #03172f;
  color: #fff;
  font-weight: bold;

  @media (max-width: 500px) {
    span {
      display: none;
    }
    justify-content: center;
  }

  ul {
    display: flex;
  }
  li {
    padding: 10px;
    color: #fff;
  }

  span {
    font-size: 30px;
  }

  .select {
    color: #4bbdd8;
  }
`;
