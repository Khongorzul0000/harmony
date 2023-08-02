const express = require("express")
const {createPlaylist, getPlaylist, getPlaylists, deletePlaylist} = require("../controller/playlistController")

const playlistrouter = express.Router()

playlistrouter
.get("/playlist/:id", getPlaylist)
.get("/playlists", getPlaylists)
.post("/playlistcreate", createPlaylist)
.delete("/playlistdelete/:id", deletePlaylist)

module.exports = playlistrouter