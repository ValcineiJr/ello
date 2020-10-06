import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import {
  Container,
  Header,
  Menu,
  MenuItem,
  Info,
  About,
  SelectAllotment,
  AllotmentList,
  Allotment,
  AllotmentArea,
} from "./styles";

function App() {
  const listRef = useRef(null);
  const [allotments] = useState([
    {
      name: "Pedro Mateus",
      description:
        "Was years it seasons was there from the in them together over that, third sixth gathered female creeping bearing behold years.",
      url: "",
      image: "lote.png",
    },

    {
      name: "Pedro Lucas",
      description: "Um lote muito bacana",
      url: "",
      image: "lote3.png",
    },
  ]);

  const [allotmentDescription, setAllotmentDescription] = useState(
    "Was years it seasons was there from the in them together over that, third sixth gathered female creeping bearing behold years."
  );
  const [allotmentName, setAllotmentName] = useState("Pedro Mateus");

  useEffect(() => {
    listRef.current.style.cursor = "grab";
    // Attach the handler
    listRef.current.addEventListener("mousedown", mouseDownHandler);
  }, []);

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
    listRef.current.style.cursor = "grabbing";
    listRef.current.style.userSelect = "none";

    pos = {
      left: listRef.current.scrollLeft,
      top: listRef.current.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    listRef.current.scrollTop = pos.top - dy;
    listRef.current.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    listRef.current.style.cursor = "grab";
    listRef.current.style.removeProperty("user-select");

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  const selectAllotment = (name, description) => {
    setAllotmentName(name);
    setAllotmentDescription(description);
  };

  const toggleMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <Container>
        <Header>
          <Menu>
            <div className="logo">
              <img src="https://via.placeholder.com/170x60" alt="" />
            </div>
            <div className="menu">
              <ul>
                <MenuItem>home</MenuItem>
                <MenuItem>sobre</MenuItem>
                <MenuItem>empreendimentos</MenuItem>
                <MenuItem>pedro mateus</MenuItem>
                <MenuItem>depoimentos</MenuItem>
                <MenuItem>contato</MenuItem>
              </ul>
            </div>
            <a href="#" className="menu-icon" onClick={toggleMenu}>
              <i class="fas fa-bars "></i>
            </a>
          </Menu>
          <Info>
            <div className="image">
              <img src="https://picsum.photos/id/1029/500/500" alt="" />
            </div>

            <div className="text">
              <p className="title">ELLO Empreendimentos</p>
              <p className="description">
                We are a new design studio based in USA. We have over 20 years
                of combined experience, an know a thing or two about designing
                websites and mobile apps.
              </p>
              <button>saiba mais</button>
            </div>
          </Info>
        </Header>
        <About>
          <p className="title">Sobre nós</p>
          <p className="info">
            Divide have don't man wherein air fourth. Own itself make have night
            won't make.
          </p>
          <p className="info">
            A you under Seed appear which good give. Own give air without fowl
            moveth dry first
          </p>
          <p className="info">heaven fruit, dominion she'd won't very all.</p>
        </About>
        <SelectAllotment>
          <span>Selecione um loteamento!</span>
        </SelectAllotment>
        <AllotmentList ref={listRef}>
          <ul>
            {allotments.map((allotment) => (
              <Allotment
                key={allotment.name}
                onClick={() =>
                  selectAllotment(allotment.name, allotment.description)
                }
              >
                <img src={require(`./assets/${allotment.image}`)} alt="" />
              </Allotment>
            ))}
          </ul>
        </AllotmentList>
        <AllotmentArea>
          <p className="title">Loteamento {allotmentName}</p>
          <p className="description">{allotmentDescription}</p>
          <div className="video">{allotmentName}</div>
        </AllotmentArea>
      </Container>
    </div>
  );
}

export default App;
