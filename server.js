const express = require("express")


const app = express()
app.get("/", (request, response) => {
  response.send(["dog","bog","sog","flog"])
})

app.listen(4000, () => {
  console.log("EXPRESS IS AWAITING YOU")
})