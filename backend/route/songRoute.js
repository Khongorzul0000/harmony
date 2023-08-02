const {createSong, getSong, getSongs, deleteSong} = require("../controller/songController")
const express = require("express")

const songrouter = express.Router()

songrouter
.get("/song/:id", getSong)
.get("/songs", getSongs)
.post("/songcreate", createSong)
.delete("/songdelete/:id", deleteSong)

module.exports = songrouter