// -- Status Code Notes
// 100 range - Informational Responses
// 200 range - Success Codes
// 300 range - Codes for redirects
// 400 range - user or client error codes
// 500 range - server error codes

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  // -- Writing response to the browser

  //   res.write("<h1>Profile</h1>");
  //   res.write("<p>My name is Brian</p>");
  //   res.write("<p>I am 26 years old</p>");
  //   res.end();

  // -- Using file system to read and send files to the browser from our computer

  // fs.readFile("./views/index.html", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   } else {
  //     // res.write(data);
  //     res.end(data);
  //   }
  // });

  // -- Routing urls for specific cases
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about"); // re-directing users if they used an old url
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Server is listening to port 3000");
});
