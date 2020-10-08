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
  Bar,
  IconsArea,
  Icon,
  Images,
  Depositions,
  Indicator,
} from "./styles";
import ProgressBarImage from "./assets/progress-bar-image.jpg";
import foto1 from "./assets/apresentation/foto1.jpg";
import foto2 from "./assets/apresentation/foto2.jpg";
import foto3 from "./assets/apresentation/foto3.jpg";
import foto4 from "./assets/apresentation/foto4.jpg";
import foto5 from "./assets/apresentation/foto5.jpg";
import foto6 from "./assets/apresentation/foto6.jpg";
import foto7 from "./assets/apresentation/foto7.jpg";
import foto8 from "./assets/apresentation/foto8.jpg";

function App() {
  const [position, setPosition] = useState(2);

  useEffect(() => {
    autoDepoScroll();
  }, [position]);

  const autoDepoScroll = () => {
    const width = window.innerWidth;
    const slideTime = 6;

    setTimeout(() => {
      if (position === 3) {
        setPosition(1);
        depoRef.current.scrollBy({
          top: 0,
          left: -(width + width),
          behavior: "smooth",
        });
      } else {
        setPosition(position + 1);

        depoRef.current.scrollBy({
          top: 0,
          left: width,
          behavior: "smooth",
        });
      }
    }, slideTime * 1000);
  };

  const listRef = useRef(null);
  const depoRef = useRef(null);

  const images = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8];
  const depositions = [1, 2, 3];

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

  const depositionScroll = () => {
    const width = window.innerWidth;

    depoRef.current.scrollBy({
      top: 0,
      left: width,
      behavior: "smooth",
    });

    if (depoRef.current.scrollLeft === 0) {
      setPosition(1);
    } else if (depoRef.current.scrollLeft === width) {
      setPosition(2);
    } else {
      setPosition(3);
    }
  };

  return (
    <div className="App">
      <Container>
        <Header>
          <Menu>
            <div className="logo">
              <img src={require("./assets/logo.png")} alt="" />
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
          <div className="progress-bar">
            <div className="bars">
              <span>Loteamento {allotmentName}</span>
              <div className="bar-box">
                documentação
                <div className="bar-case">
                  <Bar Barsize={70} />
                </div>
              </div>
              <div className="bar-box">
                aprovação
                <div className="bar-case">
                  <Bar Barsize={90} />
                </div>
              </div>
              <div className="bar-box">
                infraestrutura
                <div className="bar-case">
                  <Bar Barsize={60} />
                </div>
              </div>
            </div>
            <div className="image">
              <img src={ProgressBarImage} alt="" />
            </div>
          </div>
          <IconsArea>
            <Icon>
              <i class="fas fa-hotel"></i>
              <div className="info">
                <p className="number">100</p>
                <p>lotes</p>
              </div>
            </Icon>
            <Icon>
              <i class="far fa-file-alt"></i>
              <div className="info">
                <p className="number">70%</p>
                <p>documentação</p>
              </div>
            </Icon>
            <Icon>
              <i class="far fa-thumbs-up"></i>
              <div className="info">
                <p className="number">90%</p>
                <p>aprovação</p>
              </div>
            </Icon>
            <Icon>
              <i class="fas fa-university"></i>
              <div className="info">
                <p className="number">60%</p>
                <p>infraestrutura</p>
              </div>
            </Icon>
          </IconsArea>
          <Images>
            <ul>
              {images.map((img) => (
                <li>
                  <img src={img} alt="" />
                </li>
              ))}
            </ul>
          </Images>
        </AllotmentArea>
        <Depositions ref={depoRef}>
          <ul>
            {depositions.map((deposition, i) => (
              <li>
                <div className="deposition">
                  <p>
                    {i}" Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Laudantium in, quas nemo eaque esse sit quo harum
                    dolores natus ullam commodi excepturi, libero consequuntur.
                    Facere suscipit rerum illo repudiandae quas "
                  </p>
                  <span>michael hopkins</span>
                </div>
              </li>
            ))}
          </ul>
        </Depositions>
        <div className="selectors">
          <ul>
            <Indicator size={position === 1 ? 10 : 5}></Indicator>
            <Indicator size={position === 2 ? 10 : 5}></Indicator>
            <Indicator size={position === 3 ? 10 : 5}></Indicator>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default App;
