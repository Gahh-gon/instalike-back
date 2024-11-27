import getTodosPosts from "../../models/postModels.js";
export async function listarPost(req, res)  {
    // Obtém todos os posts de forma assíncrona
    const posts = await getTodosPosts();
  
    // Envia uma resposta com status 200 (sucesso) e os posts em formato JSON
    res.status(200).json(posts);
  }
