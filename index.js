import express from 'express'
import 'dotenv/config'

const app = express()
const port = process.env.PORT

app.get("/", (req,res)=> {
    res.send("<p> Página inicial do projeto </p>")
});

app.get("/contact", (req,res)=>{
    res.send("<p>Página de contato</p><h1>Entre em Contato</h1><p>+55 (11) 99999-9999</p>")
});

app.get("/about", (req,res)=>{ 
    res.send("<p>Página de Sobre</p>")
});

app.get("/teste", (req, res) => {
    res.send("<h1>Teste</h1>");
});

app.listen(port, ()=>{
    console.log(`Server Running at http://localhost:${port}`);
})