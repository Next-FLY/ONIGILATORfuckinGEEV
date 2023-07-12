const mod = require('./mod.js')
const express = require('express')
const server = express()
const fs = require('fs')
const path = require('path')
const PORT = 8888 //ПОРТ

const urlPars = express.urlencoded({extended: false}) //ПАРС ОТПРАВЛЯЕМЫХ ДАННЫХ REQUIRE
const createPath = (file) => path.resolve(__dirname, 'views', file) //ОТНОСИТЕЛЬНЫЙ ПУТЬ К ФАЙЛ

server.use(express.static('views'))

server.set('view engine', 'ejs')

server.listen(PORT, ()=>{
    console.log(`Адрес сервера http://localhost:${PORT}/`)
})