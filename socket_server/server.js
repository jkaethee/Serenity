const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({port: 9090})

let clients = []

wss.on('connection', (connection) => {
    clients.push(connection);
    broadcast({username: "admin", message: "A user has entered!"})

    connection.on('message', (message) => {
        console.log('WEBSOCKET:',message);
        const data = JSON.parse(message);
       broadcast(data);
    })
})

setInterval(cleanUp, 100)

function broadcast(message) {
    const data = JSON.stringify(message)
    clients.forEach(client => client.send(data));
}

function cleanUp() {
    const clientsLeaving = clients.filter(client => client.readyState === client.CLOSED)
    clients = clients.filter(client => client.readyState !== client.CLOSED)
    clientsLeaving.forEach(client => broadcast({usernmae: "admin", message: "A user has left!"}))
}