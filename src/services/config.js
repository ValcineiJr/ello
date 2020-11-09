const STATUS = "DEPLOY";
let URL = "http://localhost:3333";

if (STATUS === "DEPLOY") {
  URL = "https://ello-backend.herokuapp.com";
} else {
  URL = "http://localhost:3333";
}

export default URL;
