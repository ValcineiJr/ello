import styled from "styled-components";
const headerBgColor = "#03172F";
const buttonColor = "#4BBDD8";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .up-button {
    width: 50px;
    height: 50px;
    display: flex;
    border-radius: 25px;
    color: #fff;
    background: ${headerBgColor};
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 20px;
    cursor: pointer;
    border: 1px solid #fff;
    right: 20px;
  }
  .mobile-menu {
    display: none;
    width: 100%;
    background: #fff;
    color: ${headerBgColor} !important;
  }
  .mobile-menu li {
    color: ${headerBgColor} !important;
  }
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
    width: 120px;
    height: 50px;
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
  cursor: pointer;
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

  @media (max-width: 1000px) {
    padding: 20px;
    /* padding-bottom: 150px; */

    .video {
      height: 300px !important;
    }
  }

  .see-more {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    width: 100%;
    height: 20px;
    background: ${headerBgColor};
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
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }

  .progress-bar {
    display: flex;
    width: 100%;
    min-height: 450px;
    margin-top: 100px;
    background: #fff;
  }

  @media (max-width: 1000px) {
    .progress-bar {
      flex-direction: column;
    }

    .bars {
      order: 1;
      /* height: 300px; */
    }
  }

  .bar-box {
    display: flex;
    height: 30px;
    /* background: Red; */
    flex-direction: column;
    text-align: left;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 30px;
    /* background: red; */
  }

  .bar-case {
    background: #ddd;
    margin-top: 10px;
  }

  .bars {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 80px;
  }

  .bars span {
    margin-bottom: 80px;
    font-size: 30px;
    font-weight: bold;
    color: #1b1b1b;
  }

  .image {
    flex: 1;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Bar = styled.div`
  height: 4px;
  width: ${(props) => props.Barsize}%;
  background: #49bbd6;
`;

export const IconsArea = styled.div`
  height: 200px;
  width: 100%;
  background: ${headerBgColor};
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: space-evenly;

  @media (max-width: 1000px) {
    height: 400px;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
export const Icon = styled.div`
  display: flex;
  /* background: Red; */
  width: 120px;
  height: 100px;
  align-items: center;

  .number {
    font-size: 14px;
  }

  i {
    font-size: 25px;
  }

  .info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    align-items: flex-start;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
  }
`;
export const Images = styled.div`
  display: flex;
  /* width: 100%; */
  flex-wrap: wrap;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  @media (max-width: 1000px) {
    ul {
      flex-direction: column;
    }
    li {
      width: 100% !important;
    }
  }

  li {
    width: 25%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Depositions = styled.div`
  display: flex;
  flex-direction: column;
  background: ${buttonColor};
  width: 100%;
  height: 210px;
  overflow-x: hidden;

  .deposition {
    width: 100vw;
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    flex-direction: column;
  }

  @media (max-width: 1000px) {
    .deposition {
      padding: 0 30px;
    }
  }

  p {
    max-width: 500px;
    font-weight: 600;
  }

  span {
    text-transform: uppercase;
    margin-top: 15px;
    font-size: 12px;
  }

  ul {
    display: flex;
    list-style: none;
  }
`;
export const Indicator = styled.li`
  background: #fff;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.6s;
`;
export const Form = styled.form`
  display: flex;
  background: #f4f4f4;
  width: 100%;
  height: 550px;
  /* background: Red; */
  padding-top: 80px;
  padding-bottom: 50px;
  flex-direction: column;

  .header {
    /* background: yellow; */
    width: 100%;
    margin: 0 auto;
    max-width: 800px;
    text-align: center;
  }

  .header h1 {
    margin-bottom: 20px;
  }
  .header p {
    color: #aeaeae;
    font-size: 14px;
    font-weight: bold;
  }

  .form {
    display: grid;
    /* background: green; */
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 20px;
    max-width: 800px;
    grid:
      "name email" 50px
      "subject subject" 50px
      "message message" 1fr;
    gap: 20px;
  }

  .name {
    grid-area: name;
  }
  .subject {
    grid-area: subject;
  }
  .message {
    grid-area: message;
  }
  .email {
    grid-area: email;
  }

  input,
  textarea {
    padding-left: 16px;
    border: 0;
  }
  textarea {
    padding-top: 8px;
  }
  input[type="submit"] {
    height: 80px;
    margin: 20px auto;
    width: 200px;
    background: ${headerBgColor};
    border: 0;
    color: #fff;
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  min-height: 200px;
  margin-top: auto;
  background: ${headerBgColor};

  @media (max-width: 1000px) {
    flex-direction: column;
    .direitos,
    .news,
    .email,
    .social {
      min-height: 120px;
      text-align: center !important;
    }

    .direitos {
      padding-left: 0 !important;
    }

    p.title {
      display: block;
      width: 100%;
    }
  }

  p.title {
    font-size: 16px;
    color: #fff;
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
  }

  .direitos,
  .news,
  .email,
  .social {
    flex: 1;
    /* background: green; */
    color: #aeaeae;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .direitos {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 50px;
  }
  .email {
    flex-direction: column;
  }
  .news {
    justify-content: space-around;
  }
  a {
    color: #aeaeae;
    font-size: 14px;
  }
`;
