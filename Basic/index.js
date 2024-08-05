import express from "express";
const PORT = 5000;
const app = express();

app.get("./home", (req, res) => {
  res.json("HELLO everyone");
  res.send("welcome to chai and code ");
  res.send("welcome to chai and code ");
});

app.listen(PORT, () => {
  console.log(`server is runing on port no ${PORT}`);
});
