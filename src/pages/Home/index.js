import React, { useEffect, useState, useRef } from "react";
import "../../styles.css";
import api from "../../services/api";
import URL from "../../services/config";
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
  Form,
  Footer,
} from "./styles";
import ProgressBarImage from "../../assets/progress-bar-image.jpg";

function Home() {
  const [position, setPosition] = useState(2);
  const [menuVisible, setMenuVisible] = useState("none");

  useEffect(() => {
    autoDepoScroll();
  }, [position]);

  useEffect(() => {
    listRef.current.style.cursor = "grab";
    // Attach the handler
    listRef.current.addEventListener("mousedown", mouseDownHandler);

    loadAllotments();
  }, []);

  const loadAllotments = async () => {
    const response = await api.get("allotments");
    const dados = response.data;
    setAllotments(dados);
    setAllotmentName(dados[0].name);
    setAllotmentDescription(dados[0].description);
    setAllotmentImages(dados[0].gallery);
    setAllotmentinfrastructure(dados[0].infrastructure);
    setAllotmentApproval(dados[0].approval);
    setAllotmentDocumentation(dados[0].documentation);
    setAllotmentLots(dados[0].lots);
    setAllotmentVideoUrl(dados[0].video_url);
  };

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

  const depositions = [1, 2, 3];

  const [allotments, setAllotments] = useState([]);

  const [allotmentDescription, setAllotmentDescription] = useState("");
  const [allotmentName, setAllotmentName] = useState("");
  const [allotmentImages, setAllotmentImages] = useState([]);
  const [allotmentApproval, setAllotmentApproval] = useState(0);
  const [allotmentDocumentation, setAllotmentDocumentation] = useState(0);
  const [allotmentinfrastructure, setAllotmentinfrastructure] = useState(0);
  const [allotmentLot, setAllotmentLots] = useState(0);
  const [allotmentVideoUrl, setAllotmentVideoUrl] = useState(476584207);

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

  const selectAllotment = (
    name,
    description,
    images,
    documentation,
    approval,
    lots,
    infrastructure,
    videoUrl
  ) => {
    setAllotmentName(name);
    setAllotmentDescription(description);
    setAllotmentImages(images);
    setAllotmentDocumentation(documentation);
    setAllotmentApproval(approval);
    setAllotmentLots(lots);
    setAllotmentinfrastructure(infrastructure);
    setAllotmentVideoUrl(videoUrl);
  };

  const toggleMenu = (e) => {
    e.preventDefault();

    if (menuVisible === "none") {
      setMenuVisible("block");
    } else {
      setMenuVisible("none");
    }
  };

  const SmoothScroll = (area) => {
    const section = document.querySelector(`.${area}`);
    section.scrollIntoView({ behavior: "smooth" });
    const width = window.innerWidth;

    if (width <= 1000) {
      if (area !== "menu") {
        if (menuVisible === "none") {
          setMenuVisible("block");
        } else {
          setMenuVisible("none");
        }
      }
    }
  };

  const closeModal = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  const openModal = (src) => {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "flex";
    modalImg.src = `${URL}/files/${allotmentName}/${src}`;
  };

  return (
    <Container>
      <a onClick={() => SmoothScroll("menu")} className="up-button">
        <i class="fas fa-arrow-up"></i>
      </a>

      <div id="myModal" class="modal">
        <span onClick={closeModal} class="close">
          &times;
        </span>
        <img class="modal-content" id="img01" />
        <div id="caption"></div>
      </div>

      <Header>
        <Menu className="menu">
          <div className="logo">
            <img src={require("../../assets/logo.png")} alt="" />
          </div>
          <div className="menu">
            <ul>
              <MenuItem onClick={() => SmoothScroll("home")}>home</MenuItem>
              <MenuItem onClick={() => SmoothScroll("about")}>sobre</MenuItem>
              <MenuItem onClick={() => SmoothScroll("empreendimento")}>
                empreendimentos
              </MenuItem>
              <MenuItem onClick={() => SmoothScroll("depoimentos")}>
                depoimentos
              </MenuItem>
              <MenuItem onClick={() => SmoothScroll("contact")}>
                contato
              </MenuItem>
            </ul>
          </div>
          <a href="#" className="menu-icon" onClick={toggleMenu}>
            <i class="fas fa-bars "></i>
          </a>
        </Menu>
        <div style={{ display: menuVisible }} className="mobile-menu">
          <ul>
            <MenuItem onClick={() => SmoothScroll("home")}>home</MenuItem>
            <MenuItem onClick={() => SmoothScroll("about")}>sobre</MenuItem>
            <MenuItem onClick={() => SmoothScroll("empreendimento")}>
              empreendimentos
            </MenuItem>
            <MenuItem onClick={() => SmoothScroll("depoimentos")}>
              depoimentos
            </MenuItem>
            <MenuItem onClick={() => SmoothScroll("contact")}>contato</MenuItem>
          </ul>
        </div>
        <Info className="home">
          <div className="image">
            <img src="https://picsum.photos/id/1029/500/500" alt="" />
          </div>

          <div className="text">
            <p className="title">ELLO Empreendimentos</p>
            <p className="description">
              We are a new design studio based in USA. We have over 20 years of
              combined experience, an know a thing or two about designing
              websites and mobile apps.
            </p>
            <button>saiba mais</button>
          </div>
        </Info>
      </Header>
      <About className="about">
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
      <SelectAllotment className="empreendimento">
        <span>Selecione um loteamento!</span>
      </SelectAllotment>
      <AllotmentList ref={listRef}>
        <ul>
          {allotments.map((allotment) => (
            <Allotment
              key={allotment.name}
              onClick={() =>
                selectAllotment(
                  allotment.name,
                  allotment.description,
                  allotment.gallery,
                  allotment.documentation,
                  allotment.approval,
                  allotment.lots,
                  allotment.infrastructure,
                  allotment.video_url
                )
              }
            >
              <img
                src={`${URL}/files/${allotment.name}/${allotment.logo}`}
                alt=""
              />
            </Allotment>
          ))}
        </ul>
      </AllotmentList>
      <AllotmentArea>
        <p className="title">Loteamento {allotmentName}</p>
        <p className="description">{allotmentDescription}</p>
        <div className="video">
          <iframe
            src={`https://player.vimeo.com/video/${allotmentVideoUrl}?title=0&byline=0&portrait=0`}
            style={{
              width: "100%",
              height: "100%",
            }}
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <div className="progress-bar">
          <div className="bars">
            <span>Loteamento {allotmentName}</span>
            <div className="bar-box">
              documentação
              <div className="bar-case">
                <Bar Barsize={allotmentDocumentation} />
              </div>
            </div>
            <div className="bar-box">
              aprovação
              <div className="bar-case">
                <Bar Barsize={allotmentApproval} />
              </div>
            </div>
            <div className="bar-box">
              infraestrutura
              <div className="bar-case">
                <Bar Barsize={allotmentinfrastructure} />
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
              <p className="number">{allotmentLot}</p>
              <p>lotes</p>
            </div>
          </Icon>
          <Icon>
            <i class="far fa-file-alt"></i>
            <div className="info">
              <p className="number">{allotmentDocumentation}%</p>
              <p>documentação</p>
            </div>
          </Icon>
          <Icon>
            <i class="far fa-thumbs-up"></i>
            <div className="info">
              <p className="number">{allotmentApproval}%</p>
              <p>aprovação</p>
            </div>
          </Icon>
          <Icon>
            <i class="fas fa-university"></i>
            <div className="info">
              <p className="number">{allotmentinfrastructure}%</p>
              <p>infraestrutura</p>
            </div>
          </Icon>
        </IconsArea>
        <Images>
          <ul>
            {allotmentImages.map((img) => (
              <li>
                <img
                  onClick={() => openModal(img)}
                  src={`${URL}/files/${allotmentName}/${img}`}
                  alt=""
                />
              </li>
            ))}
          </ul>
        </Images>
      </AllotmentArea>
      <Depositions className="depoimentos" ref={depoRef}>
        <ul>
          {depositions.map((deposition, i) => (
            <li>
              <div className="deposition">
                <p>
                  {i}" Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laudantium in, quas nemo eaque esse sit quo harum dolores
                  natus ullam commodi excepturi, libero consequuntur. Facere
                  suscipit rerum illo repudiandae quas "
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
      <Form className="contact">
        <div className="header">
          <h1>Fale conosco</h1>
          <p>Let us know what you're looking for in an agency. </p>
          <p>
            We'll take a look and see if this could be the start of something
            beautiful.
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Seu Nome" className="name" />
          <input type="email" placeholder="Seu Email" className="email" />
          <input type="text" placeholder="Assunto" className="subject" />
          <textarea
            name="message"
            className="message"
            placeholder="Mensagem"
          ></textarea>
        </div>
        <input type="submit" value="ENVIAR MENSAGEM" />
      </Form>
      <Footer>
        <div className="direitos">
          <p className="title">ELLO Empreendimentos</p>
          <div>
            <p className="copy">
              &copy; 2020 Todos Os Direitos Reservados Desenvolvido por IMPACTO
            </p>
          </div>
        </div>
        <div className="email">
          <p>EMAIL@EMAIL.COM</p>
          <p>+00 0 0000-0000</p>
        </div>
        <div className="news">
          <ul>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Carreer</a>
            </li>
          </ul>
          <div>
            <ul>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Legals</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Dribble</a>
            </li>
          </ul>
        </div>
      </Footer>
    </Container>
  );
}

export default Home;
