const express = require("express");

//initalization
const app = express();

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Home page</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "John",
      email: "john@example.com",
    },
    {
      name: "Jane",
      email: "jane@example.com",
    },
  ];
  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify(users));
});

const port = 8081;

app.listen(port, () => console.log(`Running with Express at port:${port}`));
