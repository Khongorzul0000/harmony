const express = require("express")
const {createArtist, getArtist, getArtists, deleteArtist} = require("../controller/artistController")

const artistrouter = express.Router()

artistrouter
.get("/artist/:id", getArtist)
.get("/artists", getArtists)
.post("/artistcreate", createArtist)
.delete("/delete", deleteArtist)

module.exports = artistrouter