const express = require('express');
const app = express();
const mysql=require('mysql');
const myconn = require('express-myconnection');
const rutaP=require('./ruta_producto');
const dbObtions={
    host:'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'comercio'
}

app.use(myconn(mysql,dbObtions, 'single'));

app.set('port', process.env.PORT || 9000);

app.listen(9000,()=>{
    console.log("Servidor corriendo en puerto 9000");
});

app.get('/',(req, res)=>{
    res.send("Respuestas a la ruta raiz");
});



