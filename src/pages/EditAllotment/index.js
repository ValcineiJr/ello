import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import URL from "../../services/config";
import { Container } from "./styles";

const EditAllotment = () => {
  //images
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);
  const [logo, setLogo] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [lots, setLots] = useState([]);
  const [lotsQT, setLotsQT] = useState("");
  const [approval, setApproval] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [infrastructure, setInfrastructure] = useState("");
  const [documentation, setDocumentation] = useState("");
  const [id, setID] = useState(0);

  const [select, setSelect] = useState({});

  const loadLots = async () => {
    const response = await api.get("allotments");

    setLots(response.data);
  };

  useEffect(() => {
    loadLots();
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

  const send = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("video_url", videoUrl);
    data.append("documentation", documentation);
    data.append("approval", approval);
    data.append("infrastructure", infrastructure);
    data.append("lots", lotsQT);
    data.append("logo", logo);

    for (let i = 0; i < files.length; i++) {
      data.append("gallery", files[i]);
    }

    api.put(`allotment/update/${id}`, data).then((res) => {
      console.log(res);
    });
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

  useEffect(() => {
    if (lots[select]) {
      const {
        name,
        description,
        documentation,
        video_url,
        approval,
        infrastructure,
        lots: qt,
        logo,
        gallery,
        _id,
      } = lots[select];
      setName(name);
      setDescription(description);
      setDocumentation(documentation);
      setVideoUrl(video_url);
      setApproval(approval);
      setInfrastructure(infrastructure);
      setLotsQT(qt);
      setID(_id);
      document.querySelector(".logo").src = `${URL}/files/${name}/${logo}`;
      let newPrev = [];
      gallery.map((foto, i) => {
        newPrev.push(`${URL}/files/${name}/${foto}`);
      });
      setPreview(newPrev);
    }
  }, [select]);

  return (
    <Container>
      <Header active={"edit"} />

      <form method="post" onSubmit={send}>
        <p>Editar um Lote</p>
        <select onChange={(e) => setSelect(e.target.value)} name="allotments">
          <option value="0">Selecione um Lote </option>
          {lots.map((lot, i) => (
            <option key={lot._id} value={i}>
              {lot.name}
            </option>
          ))}
        </select>
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
          placeholder="Documentação (número)"
          name=""
          value={documentation}
          onChange={(e) => setDocumentation(e.target.value)}
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
          placeholder="Infraestrutura (número)"
          name=""
          value={infrastructure}
          onChange={(e) => setInfrastructure(e.target.value)}
          id=""
        />
        <input
          type="text"
          value={lotsQT}
          onChange={(e) => setLotsQT(e.target.value)}
          placeholder="Lotes (quantidade)"
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
          id="gallery"
        />
        <div className="images">
          {preview.map((image) => (
            <img src={image} alt="logo" className="galery" />
          ))}
        </div>
        <button type="submit">Alterar</button>
      </form>
    </Container>
  );
};

export default EditAllotment;
