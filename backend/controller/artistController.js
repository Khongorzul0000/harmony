const Artist = require("../model/artistModel")

const createArtist = async (req, res) =>{
    const body = req.body
    const result = await new Artist(body).save()
    res.send(result)
}

const getArtist = async (req, res) =>{
    const id = req.params.id
    const result = await Artist.findById({_id:id})
    res.send(result)
}

const getArtists = async (req, res) =>{
    const result = await Artist.find({})
    res.send(result)
}

const deleteArtist = async (req, res) =>{
    const id = req.params.id
    const result = await Artist.findByIdAndDelete({_id:id})
    res.send(result)
}

module.exports = {createArtist, getArtist, getArtists, deleteArtist}