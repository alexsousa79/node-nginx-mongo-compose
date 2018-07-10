const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')
// import express from "express"
// import restful from "node-restful"
// import server from express()
// import mongoose from restful.mongoose

//databse
mongoose.Promisse = global.Promisse
mongoose.connect('mongodb://db/mydb')

//Middlewares
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())

//ODM
const Client = restful.model('Client',{
  name: {type: String, required: true}
})

//Rest API
Client.methods(['get','post','put','delete'])
Client.updateOptions({new: true, runValidator: true})

//Rotas
Client.register(server, '/clients')


// start server
server.listen(3000)