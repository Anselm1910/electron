// import { createServer } from "net";

// const http = require('http')

// const port = 5000

//  const fs = require('fs')

// const data = fs.readFileSync('hello.txt')
// console.log(data.toString())

// http.createServer(function(request, response){
//  response.write('Welcome to this server')
// response.end()
// }).listen(port)

// console.log(`server is runing at ${port}`)


// var http =('http')
// http = createServer (function(req,res){
//     res.writeHead(200, {'content Type': 'text/html'});
//     res.end();
// )}.listen(8080)

const {app, BrowserWindow} = require ('electron');
const url = require ('url');
const path = require ('path');

let win

function createWindow() {
    win = new BrowserWindow({width:800, height:600, webPreference:{nodeIntegration:true}})
    win.loadURL(url.format({pathname:path.join (__dirname, 'index.html'),protocol:'file:',slashes:true}))
}

app.on('ready', createWindow)