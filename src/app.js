const express = require("express");
const app = express();

/*
// Informando ao express qual tipo do renderizador (view engine);
app.set('view engine', 'ejs');

// Informando ao express os arquivos estaticos (static); Arquivos não processados pelo backend
app.use(express.static(`${__dirname}/public`));
*/

app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Teste conexão com o banco de dados
const DATABASE = require("./api/Database/database");
    DATABASE.authenticate()
        .then( () => {
            console.log("Conexão com sucesso!");
        })
        .catch( err => {
            console.log(err)
        })

//Models
const userModel = require("./api/models/UserModel");

//Config Routes
const userRoutes = require("../routes/userRoutes");
app.use("/", userRoutes);


app.get("/", (req, res) => {
    res.send("Ola mundo!")
})

app.listen(3000 , () => {
    console.log("Servidor iniciado!(http://localhost:3000/)")
})
