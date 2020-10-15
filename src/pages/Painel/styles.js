import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: #03172f;
  justify-content:center;
`;
export const Header = styled.div`
  max-height: 80px;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: #03172f;
`;
export const Content = styled.div`
  width:100%;
  max-width:1000px;
  margin:0 auto;
  display:flex;
  flex-direction:column;

  .images{
    /* background:red; */
    display:flex;
    flex-wrap:wrap;
    justify-content:center;

    img{
      width:calc(25% - 40px);
      margin:5px;
    }
  }

   p{
     text-align:center;
     padding:20px 0;
     color:#fff;
     text-transform:uppercase;
     font-size:20px;
   }

   input,textarea,select{
     width:80%;
     height: 40px;
     border:0;
     margin:10px auto;
     padding-left:8px;
     border-radius:5px;
   }

   .header{
     display:flex;
     margin:0 auto;
     width:80%;
     justify-content:center;
     align-items:center;

     a{
       padding:0 16px;
       color:#fff;
       height: 40px;
       cursor: pointer;
       margin-left:8px;
       background:#dc3545;
       border-radius:5px;
       display:flex;
       justify-content:center;
       align-items:center;
     }
   }

   select{
     font-weight:bold;
     font-size:18px;
     width:100%;
      margin:10px 0;
   }

   textarea{
     padding-top:8px;
   }

   input[type='file']{
  display: none
  }
  label{
    padding:0 20px;
    display:flex;
    align-items:center;
    justify-content:center;
     height: 50px;
     border:0;
     margin:10px auto;    
     border-radius:5px;
     color:#fff;
     background:#4BBDD8;
  }

  img.logo{
    width:150px;
    margin:10px auto;
  }

  button{
    width:120px;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
     height: 50px;
     border:0;
     margin:10px auto;    
     border-radius:5px;
     background:#4BBDD8;
     text-transform:uppercase;
  }
`;
export const SessionSelector = styled.div`
  height: 50px;
  width:100%;
  max-width:1000px;
  justify-content:space-between;
  display:flex;
  margin:40px auto 20px;
`;

export const Tab = styled.a`
width:49%;
display:flex;
background:${props => props.backgroundColor};
justify-content:center;
border-radius:5px;
align-items:center;
cursor: pointer;
text-transform:uppercase;
color:#Fff;
transition:all .6s;
`;
