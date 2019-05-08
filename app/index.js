var express = require("express");
var path = require("path");

var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

server.listen(8888, () => console.log("Listening on port 8888"));


var clients = [];

io.on('connection', socket => {
    var info = {};
    var clientInfo = {socket, info};

    socket.on("set_mode", newMode => {
        var oldMode = info["mode"];
        info["mode"] = newMode;
        
        if (!info["counted"]) {
            info["counted"] = true;
            console.log("New client of type " + info["mode"] + " connected");
        } else {
            console.warn("Client changed modes from " + oldMode + " to " + newMode);
        }

        clients.push(clientInfo);

        socket.broadcast.emit("connected_clients", {
            "8ball": clients.filter(i => i.info['mode'] === '8ball').length,
            "answerer": clients.filter(i => i.info['mode'] === 'answerer').length,
        });
    });

    socket.on("question", question => {
        if (info["mode"] !== "8ball") return;
        console.log("Question: " +  question);
        socket.broadcast.emit("question", question);
    });

    socket.on("answer", answer => {
        if (info["mode"] !== "answerer") return;
        console.log("Answer: " + answer);
        socket.broadcast.emit("answer", answer);
    });

    socket.on("disconnect", () => {
        var idx = clients.indexOf(clientInfo);
        if (idx >= 0) clients.splice(idx, 1);
        console.log("Client disconnected of mode: " + info["mode"]);
    });
});