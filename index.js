const express = require("express"); //importar express
const bodyParser = require("body-parser");
const misRutas = require("./routes/rutas");

const app = express(); //crear al servidor
const port = process.env.PORT || 3000;

app.use(express.static(process.cwd()+"/angular-app/dist/angular-app/"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', misRutas);

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/angular-app/dist/angular-app/index.html")
});

app.listen(port, () => {
    console.log(`hola servidor ejecucion en http://localhost:${port}`);
})