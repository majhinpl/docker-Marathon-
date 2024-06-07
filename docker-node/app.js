const express = require("express");
const app = express();
const PORT = 8002;

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(PORT, () => {
  console.log(`Server listening at: ${PORT}`);
});
