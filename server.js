import express from "express";

const posts = [
    { id: 1, descricao: "Uma fonte teste", img: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Segundo post", img: "https://placecats.com/felix/200/300" },
    { id: 3, descricao: "Terceiro post", img: "https://placecats.com/garfield/150/200" },
    { id: 4, descricao: "Quarto post", img: "https://placecats.com/whiskers/300/300" },
    { id: 5, descricao: "Quinto post", img: "https://placecats.com/snowball/250/250" }
  ];
const app = express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("Server started on port 3000");
}); 

function buscarPostPorID(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id)
    })
}

app.get("/posts", (req, res) =>{
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) =>{
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});