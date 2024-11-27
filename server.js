import express from "express"; // Importa o framework Express para criar aplicações web
import routes from "./src/routes/postRoutes.js";


// Cria uma instância do Express e a armazena em 'app'
const app = express();

routes(app)
// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});



