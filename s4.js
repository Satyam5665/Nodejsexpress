//File Creation using NodeJs
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> First Page</title></head>");
    res.write("<body><h1>Hello </h1></body>");
    res.write("</html>");
    return res.end();
  }

  if (url == "/file") {
    fs.writeFileSync("Newfile.txt", "Hello World");
    res.statusCode = 302; //302 code means Redirect ..it is similar as Error404 which means URL not exist
    res.setHeader("Location", "/");
    return res.end(); //Redirect to First Page
  }
});

server.listen(3000);
