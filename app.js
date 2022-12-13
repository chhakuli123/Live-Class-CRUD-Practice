require("dotenv").config();
const express = require("express")
const userRouter = require("./routes/userRoutes")
const app = express()

app.get("/", userRouter)

module.exports = app;