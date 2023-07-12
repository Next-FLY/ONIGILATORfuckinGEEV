const mod = require('./mod.js')
const express = require('express')
const server = express()
const fs = require('fs')
const path = require('path')
const PORT = 8888 //введи цифры и изменишь порт)

const urlPars = express.urlencoded({extended: false}) //парс структуры
const createPath = (file) => path.resolve(__dirname, 'views', file)


server.use(express.static('views'))

server.set('view engine', 'ejs')

server.listen(PORT, ()=>{
    console.log(`Адрес сервера http://localhost:${PORT}/`)
})