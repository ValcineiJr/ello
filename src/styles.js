import styled from "styled-components";
const headerBgColor = "#03172F";
const buttonColor = "#4BBDD8";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  background: ${headerBgColor};
  min-height: 500px;
  flex-direction: column;
`;
export const Menu = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  height: 80px;
  justify-content: space-between;
  align-items: center;

  .menu-icon {
    display: none;
  }

  @media (max-width: 1000px) {
    .menu {
      display: none;
    }
    .menu-icon {
      display: block;
      font-size: 30px;
      color: #fff;
      margin-right: 25px;
    }

    .logo {
      margin-left: 20px;
    }
  }

  .menu ul {
    display: flex;
    list-style: none;
  }

  .logo {
    background: green;
    width: 170px;
    height: 60px;
  }
  .logo img {
    width: 100%;
    height: 100%;
  }
`;
export const Center = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  height: 60px;
`;
export const MenuItem = styled.li`
  padding: 10px;
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;

    .image {
      padding: 0 20px;
    }
    img {
      /* object-fit: contain; */
    }
  }

  margin-top: 50px;

  .image {
    width: 100%;
    max-width: 600px;
    height: 300px;
  }

  .image img {
    width: 100%;
    height: 100%;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 45px;
    color: #fff;

    .title {
      font-size: 30px;
      font-weight: bold;
    }

    .description {
      margin: 30px 0;
      font-weight: lighter;
    }

    button {
      height: 45px;
      width: 140px;
      border: 0;
      background: ${buttonColor};
      text-transform: uppercase;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 300px;
  justify-content: center;

  .title {
    font-size: 26px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #181818;
  }

  .info {
    color: #aeaeae;
    font-size: 14px;
  }
`;
export const SelectAllotment = styled.div`
  display: flex;
  justify-content: center;
  background: #49bbd6;
  height: 70px;
  align-items: center;

  span {
    color: #fff;
    font-size: 26px;
  }
`;
export const AllotmentList = styled.div`
  display: flex;
  overflow-x: scroll;

  @media (min-width: 1366px) {
    justify-content: center;
  }
  /* width: 100%; */

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }

  ul {
    display: flex;
    list-style: none;
  }
`;
export const Allotment = styled.li`
  width: 200px;
  height: 125px;
  margin: 20px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  img {
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`;
export const AllotmentArea = styled.div`
  display: flex;
  background: #f4f4f4;
  min-height: 300px;
  flex-direction: column;
  text-align: center;
  align-items: center;

  padding-bottom: 150px;

  @media (max-width: 1000px) {
    padding: 20px;
    padding-bottom: 150px;
  }

  .title {
    color: #1b1b1b;
    font-weight: bold;
    font-size: 30px;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  .description {
    color: #aeaeae;
    font-size: 14px;
    width: 100%;
    max-width: 470px;
    margin-bottom: 40px;
  }
  .video {
    height: 500px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }
`;
