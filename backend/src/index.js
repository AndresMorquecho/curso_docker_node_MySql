require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

console.log("Clave secreta:", jwtSecret);
console.log("port:", port);

app.get("/", (req, res) => {
  res.send("Api backend funcionando");
});
