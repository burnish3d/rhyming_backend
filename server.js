const express = require("express")
const port = 4000

const app = express()
app.get("/", (request, response) => {
  response.send(["dog","bog","sog","flog"])
})

app.listen(port, () => {
  console.log("EXPRESS IS AWAITING YOU")
})