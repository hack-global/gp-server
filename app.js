const express = require("express");
const app = express();
const port = 3000;

app.use(require("./router"));

app.post("/login", async (req, res) => {
  try {
    //..
  } catch (error) {
    //...
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
