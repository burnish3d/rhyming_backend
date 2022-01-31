const express = require("express")
const { PORT = 4000 } = process.env;

const app = express()
app.get("/", (request, response) => {
  response.send(["dog","bog","sog","flog"])
})

app.listen(PORT, () => {
  console.log("EXPRESS IS AWAITING YOU")
})