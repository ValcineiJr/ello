import React, {useState, useEffect} from "react";

import { Container, SessionSelector, Content,Tab } from "./styles";

const Painel = () => {
  const [selectSession, setSelectSession] = useState('edit');

 

  const EditAllotment = () => (
    <>
      <p>Editar um Lote</p>

      <div className="header">
        <select name="allotments" >
          <option value="0">Selecione um Lote </option>
          <option value="oi">Pedro Mateus</option>
        </select>
        <a>Excluir</a>
      </div>
      

      <input type="text" placeholder='Nome' />

      <img src="https://via.placeholder.com/150" alt="logo" className='logo'/>
      <label className='logo' for='logo'>
        Adicionar imagem icone
      </label>
      <input type="file" id='logo' name="logo" />

      <textarea name="descricao" placeholder='Descrição' ></textarea>
     
      <input type="text" placeholder='URL do video' />

      <input type="number" placeholder='Documentação (número)' name="" id="" />
      <input type="number" placeholder='Aprovação (número)' name="" id="" />
      <input type="number" placeholder='Infraestrutura (número)' name="" id="" />
      <input type="text" placeholder='Lotes (quantidade)' name="" id="" />

      <label className='galery' for='galery'>
        Adicione imagens do Lote
      </label>
      
      <input type="file" multiple name="galery" id="galery" />
       <div className="images">
      <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
       <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
       <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
       <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
       <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
       <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
       <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
       <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
      </div>
      <button>Editar</button>
    </>
  )

  const AddAllotment = () => (
    <>
      <p>Adicionar um Lote</p>     

      <input type="text" placeholder='Nome' />

      <img src="https://via.placeholder.com/150" alt="logo" className='logo'/>
      <label className='logo' for='logo'>
        Adicionar imagem icone
      </label>
      <input type="file" id='logo' name="logo" />

      <textarea name="descricao" placeholder='Descrição' ></textarea>
     
      <input type="text" placeholder='URL do video' />

      <input type="number" placeholder='Documentação (número)' name="" id="" />
      <input type="number" placeholder='Aprovação (número)' name="" id="" />
      <input type="number" placeholder='Infraestrutura (número)' name="" id="" />
      <input type="text" placeholder='Lotes (quantidade)' name="" id="" />

      <label className='galery' for='galery'>
        Adicione imagens do Lote
      </label>
      
      <input type="file" multiple name="galery" id="galery" />
       <div className="images">
      <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
       <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
       <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
       <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
       <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
       <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
       <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
       <img src="https://via.placeholder.com/150" alt="logo" className='galery'/>
      </div>
      <button>Editar</button>
    </>
  )


  const handleChangeSession = (session) => {
    if (session === 'edit') {
          setSelectSession('edit')
    } else {
      setSelectSession('add')
      }
  }

  return (
    <Container>
      <SessionSelector>
        <Tab onClick={() => handleChangeSession('edit')} backgroundColor={selectSession === 'edit'? '#4BBDD8' : "#666"} >Editar</Tab>
        <Tab onClick={() => handleChangeSession('add')} backgroundColor={selectSession === 'add'? '#4BBDD8' : "#666"}>Adicionar</Tab>
      </SessionSelector>
      <Content>
        {selectSession === 'edit'? <EditAllotment  /> : <AddAllotment />}
      </Content>

    </Container>
  );
};

export default Painel;
