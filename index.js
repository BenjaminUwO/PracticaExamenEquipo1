const express = require('express')
const mysql = require('mysql')

//creando una conexion
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'RETHO'
})

//conectando a MySql
db.connect(err =>{
    if(err){
        throw err
    }
    console.log('conexion establecida')
})

const app = express()

//a

app.get('/createdb',(req,res) =>{
    let sql = "CREATE DATABASE nodemysql"
    db.query(sql, err => {
        if(err){
            throw err
        }
        res.send('Base de datos Creada')
    })
})

//agregar usuario

app.get('/usuario', (req,res) =>{
    let post = {ID: 1, RFC:'ADMIN', CURP:'-', NOMBRE:'-', CONTRASENA:'ADMIN'}
    let sql = 'INSERT INTO usuarios set ?'
    let query = db.query(sql, post, err =>{
        if(err){
            throw err
        }
        res.send('USUARIO AGREGADO')
    })
})

//elminiar usuarios 



// app.get('/borrar', (req,res) => {
//     let post = {ID:1}
// })

app.listen('3000', () => {
    console.log('server iniciado en el puerto 3000')
})