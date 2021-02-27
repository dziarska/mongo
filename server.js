const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const port = process.env.PORT || 4000;

server.use(bodyParser.urlencoded({etended: true}));
server.use(bodyParser.json());

server.get("/", function(req,res){
    // res.send("hello world");
    res.sendFile(__dirname+"/index.html")
})

server.post("/someuserdata", function(req,res){
    res.send("tu cos bedzie")
    console.log("tu cos bedzie")
})

server.listen(port, (err) => {
    if (err) {return console.log(`bład ${err}`)}
    console.log(`strona dziala na porcie ${port}`)
})