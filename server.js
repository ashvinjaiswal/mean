const http = require('http');
const app = require('./backend/app');
const port = process.env.PORT || 3100;

//Set the configuration of express app
app.set('port',port)
//create the server
const server = http.createServer(app);

server.listen(port);
