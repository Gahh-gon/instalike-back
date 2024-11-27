import express from 'express'; 
import { listarPost } from './controllers/postControllers.js';
// Rota para lidar com requisições GET para '/posts'

 const routes = (app) =>{
    // Habilita o parsing de dados JSON em requisições (útil para APIs)
    app.use(express.json());
// rota para buscar todos post
    app.get("/posts",listarPost );

}

export default routes;
   