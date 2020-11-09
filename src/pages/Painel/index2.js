import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Container, SessionSelector, Content, Tab } from "./styles";

const Painel = () => {
  const [selectSession, setSelectSession] = useState("add");
  const [preview, setPreview] = useState([]);
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const [documentation, setDocumentation] = useState("");
  const [approval, setApproval] = useState("");
  const [lots, setLots] = useState("");
  const [infrastructure, setInfrastructure] = useState("");

  const [logo, setLogo] = useState([]);

  const saveFiles = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFiles(files);

      Promise.all(
        files.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener("load", (ev) => {
              resolve(ev.target.result);
            });
            reader.addEventListener("error", reject);
            reader.readAsDataURL(file);
          });
        })
      ).then(
        (imgs) => {
          setPreview(imgs);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  const send = (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("gallery", files[i]);
    }

    api.post("allotment/add", data).then((res) => {
      console.log(res);
    });
  };

  const EditAllotment = () => (
    <>
      <p>Editar um Lote</p>

      <div className="header">
        <select name="allotments">
          <option value="0">Selecione um Lote </option>
          <option value="oi">Pedro Mateus</option>
        </select>
        <a>Excluir</a>
      </div>

      <input type="text" placeholder="Nome" />

      <img src="https://via.placeholder.com/150" alt="logo" className="logo" />
      <label className="logo" for="logo">
        Adicionar imagem icone
      </label>
      <input type="file" id="logo" name="logo" />

      <textarea name="descricao" placeholder="Descrição"></textarea>

      <input type="text" placeholder="URL do video" />

      <input type="number" placeholder="Documentação (número)" name="" id="" />
      <input type="number" placeholder="Aprovação (número)" name="" id="" />
      <input
        type="number"
        placeholder="Infraestrutura (número)"
        name=""
        id=""
      />
      <input type="text" placeholder="Lotes (quantidade)" name="" id="" />

      <label className="galery" for="galery">
        Adicione imagens do Lote
      </label>

      <input type="file" multiple name="galery" id="galery" />
      <div className="images">
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
      </div>
      <button>Editar</button>
    </>
  );

  const AddAllotment = () => (
    <form method="post" onSubmit={send}>
      <p>Adicionar um Lote</p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />

      <img src="https://via.placeholder.com/150" alt="logo" className="logo" />
      <label className="logo" for="logo">
        Adicionar imagem icone
      </label>
      <input type="file" id="logo" name="logo" />

      <textarea
        name="descricao"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição"
      ></textarea>

      <input type="text" placeholder="URL do video" />

      <input type="number" placeholder="Documentação (número)" name="" id="" />
      <input type="number" placeholder="Aprovação (número)" name="" id="" />
      <input
        type="number"
        placeholder="Infraestrutura (número)"
        name=""
        id=""
      />
      <input type="text" placeholder="Lotes (quantidade)" name="" id="" />

      <label className="gallery" for="gallery">
        Adicione imagens do Lote
      </label>

      <input
        type="file"
        onChange={saveFiles}
        multiple
        name="gallery"
        id="gallery"
      />
      <div className="images">
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="galery"
        />
      </div>
      <button type="submit">Editar</button>
    </form>
  );

  const handleChangeSession = (session) => {
    if (session === "edit") {
      setSelectSession("edit");
    } else {
      setSelectSession("add");
    }
  };

  return (
    <Container>
      <SessionSelector>
        <Tab
          onClick={() => handleChangeSession("edit")}
          backgroundColor={selectSession === "edit" ? "#4BBDD8" : "#666"}
        >
          Editar
        </Tab>
        <Tab
          onClick={() => handleChangeSession("add")}
          backgroundColor={selectSession === "add" ? "#4BBDD8" : "#666"}
        >
          Adicionar
        </Tab>
      </SessionSelector>
      <Content>
        {selectSession === "edit" ? <EditAllotment /> : <AddAllotment />}
      </Content>
    </Container>
  );
};

export default Painel;
