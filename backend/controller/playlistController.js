const Playlist = require("../model/playlistModel")

const createPlaylist = async (req, res) =>{
    const body = req.body
    const result = await Playlist(body).save()
    res.send(result)
}

const getPlaylist = async (req, res) =>{
    const id = req.params.id
    const result = await Playlist.findById({_id:id}).populate({path:"songs"})
    res.send(result)
}

const getPlaylists = async (req, res) =>{
    const result = await Playlist.find({})
    res.send(result)
}

const deletePlaylist = async (req, res) =>{
    const id = req.params.id
    const result = await Playlist.findByIdAndDelete({_id:id})
    res.send(result)
}

module.exports = {createPlaylist, getPlaylist, getPlaylists, deletePlaylist}
