// Importa a função 'conectarAoBanco' de um arquivo separado para estabelecer conexão com o banco de dados

import conectarAoBanco from "../../src/config/dbConfig.js";

// Conecta-se ao banco de dados de forma assíncrona e armazena a conexão em 'conexao'
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Função assíncrona para obter todos os posts do banco de dados
export default async function getTodosPosts() {
    // Obtém o banco de dados da conexão estabelecida
    const db = conexao.db("imersao-instabytes");
  
    // Obtém a coleção 'posts' do banco de dados
    const colecao = db.collection("posts");
  
    // Encontra todos os documentos na coleção 'posts' e os converte para um array
    return colecao.find().toArray();
  }
  
  