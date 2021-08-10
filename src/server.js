const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("*", (req, res) => {
  res.json({ msg: "Im ok..." });
});

app.listen(4000, () => {
  console.log("I'm listening...");
});
