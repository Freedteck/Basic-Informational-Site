const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  let path = "";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/contact-me":
      path += "contact-me.html";
      break;

    default:
      path += "404.html";
      break;
  }

  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page Not Found");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
