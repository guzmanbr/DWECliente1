//fichero rutas productos

const express = require('express');
const rutaProducto = express.Router();


//aqui van las rutas que queremos
app.get('/',(req, res)=>{
    res.send("Respuestas asegunda");
});

module.exports=rutaProducto;