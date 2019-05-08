// The client can use this information to determine if it is even worth sending a query outbound
var clientCounts = {
    "8ball": 0,
    "answerer": 0,
};

function initSocket(mode) {
    var address = localStorage.getItem("ws_address") || "http://localhost:8888";
    var socket = io(address);

    console.log("Setting mode as ", mode);
    socket.emit("set_mode", mode);

    // We assume that some other code introduces onAnswer and onQuestion to the global space
    if (mode === "8ball") {
        socket.on("answer", onAnswer);
    } else {
        socket.on("question", onQuestion);
    }

    socket.on("connected_clients", counts => {
        console.log("Got connected clients: ", counts);
        clientCounts = counts;
    });

    return {
        askQuestion: question => socket.emit("question", question),
        answerQuestion: answer => socket.emit("answer", answer),
    };
}