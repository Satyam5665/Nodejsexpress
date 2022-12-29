const http = require("http"); // First we're Importing the Http module

//Then we're creating a server that gives response Hello World to request req
const server = http.createServer((req, res) => {
  console.log("url:", req.url, "method:", req.method, "headers:", req.headers);
});

//It'll be listened on localhost:3000
server.listen(3000);
