import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import { Container } from "./styles";
import api from "../../services/api";

const AddAllotment = () => {
  //Imagens
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);
  const [logo, setLogo] = useState(null);
  const file = useRef([]);

  //Inputs
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [documentation, setDocumentation] = useState("");
  const [approval, setApproval] = useState("");
  const [lots, setLots] = useState("");
  const [infrastructure, setInfrastructure] = useState("");

  useEffect(() => {
    if (images.length === 0) {
      setPreview([
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ]);
    }
  }, []);

  const send = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("video_url", videoUrl);
    data.append("documentation", documentation);
    data.append("approval", approval);
    data.append("infrastructure", infrastructure);
    data.append("lots", lots);

    data.append("logo", logo);

    for (let i = 0; i < files.length; i++) {
      data.append("gallery", files[i]);
    }

    api.post("allotment/add", data).then((res) => {
      console.log(res);
    });
  };

  const saveLogo = (input) => {
    if (input.target.files && input.target.files[0]) {
      setLogo(input.target.files[0]);
      var reader = new FileReader();

      reader.onload = function (e) {
        document.querySelector(".logo").src = e.target.result;
      };

      reader.readAsDataURL(input.target.files[0]);
    }
  };

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
  return (
    <Container>
      <Header active={"add"} />
      <form method="post" onSubmit={send}>
        <p>Adicionar um Lote</p>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />

        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="logo"
          width={150}
          height={150}
        />
        <label className="logo" for="logo">
          Adicionar imagem icone
        </label>
        <input type="file" onChange={saveLogo} id="logo" name="logo" />

        <textarea
          name="descricao"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição"
        ></textarea>

        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="URL do video"
        />

        <input
          type="number"
          value={documentation}
          onChange={(e) => setDocumentation(e.target.value)}
          placeholder="Documentação (número)"
          name=""
          id=""
        />
        <input
          type="number"
          value={approval}
          onChange={(e) => setApproval(e.target.value)}
          placeholder="Aprovação (número)"
          name=""
          id=""
        />
        <input
          type="number"
          value={infrastructure}
          onChange={(e) => setInfrastructure(e.target.value)}
          placeholder="Infraestrutura (número)"
          name=""
          id=""
        />
        <input
          type="text"
          value={lots}
          onChange={(e) => setLots(e.target.value)}
          placeholder="Lotes (número)"
          name=""
          id=""
        />

        <label className="gallery" for="gallery">
          Adicione imagens do Lote
        </label>

        <input
          type="file"
          onChange={saveFiles}
          multiple
          name="gallery"
          name="gallery"
          id="gallery"
        />
        <div className="images">
          {preview.map((image) => (
            <img src={image} alt="logo" className="galery" />
          ))}
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </Container>
  );
};

export default AddAllotment;
