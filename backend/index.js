const mongoose = require("mongoose")
const express = require("express")
const connectDb = require("./config/db")
const cors = require("cors")
const artistrouter = require("./route/artistRoute")
const playlistrouter = require("./route/playlistRoute")
const songrouter = require("./route/songRoute")
const userrouter = require("./route/userRoute")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(cors());
app.use(express.json());

app.use(artistrouter, playlistrouter, songrouter, userrouter)

app.get("/", (req, res) =>{
    res.send("Harmony backend")
})

connectDb()

app.listen(8888, () =>console.log("server started on PORT-8888"))