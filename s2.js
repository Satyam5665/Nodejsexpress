//In this, we'll be responding a website plain HTML
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title> First Page</title></head>");
  res.write("<body><h1>Hello </h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
