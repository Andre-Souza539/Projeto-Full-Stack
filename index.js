import express from 'express';
import 'dotenv/config';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';   
import morgan from 'morgan';


const app = express()
const port = process.env.PORT
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("common"));

var autenticado = false

function autenticador(req, res, next){
    const username = req.body["username"];
    const password = req.body["password"];
    if(username === "admin" && password === "admin"){
        autenticado = true
    }
    next();
}

app.use(autenticador);

app.get("/", (req,res)=> {
    console.log(req.body);
    res.sendFile(__dirname + "/public/view/index.html");
});

app.get("/login", (req,res) => {
    res.sendfile(__dirname + "/public/view/login.html");
})


app.get("/check", (req,res)=> {
    if(autenticado){
        res.sendFile(__dirname + "/public/view/logado.html");
    } else { 
        res.sendFile(__dirname + "/public/view/login.html");
    }
})

app.post("/check", (req,res)=> {
    if(autenticado){
        res.sendFile(__dirname + "/public/view/logado.html");
    } else { 
        res.send("Deixa de ser tabacudo o usuário e senha é admin")
    }
})

app.get("/deslogar", (req,res)=> {
    autenticado = false;
    res.sendFile(__dirname + "/public/view/login.html")
})

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