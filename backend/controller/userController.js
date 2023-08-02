const User = require("../model/userModel")

const createUser = async (req, res) =>{
    const body = req.body
    const result = await User(body).save()
    res.send(result)
}

const getUser = async (req, res) =>{
    const id = req.params.id
    const result = await User.findById({_id:id}).populate({path:"playlists"})
    res.send(result)
}

const getUsers = async (req, res) =>{
    const result = await User.find({})
    res.send(result)
}

const loginUser = async (req, res) =>{
    const {username, password} = req.body
    const user = await User.findOne({username}) 

    if(!user.password === password){
        res.send(user)
    }else{
        res.status(401).json({message:"User or username is unvalid"})
    }
}

module.exports = {createUser, getUser, getUsers, loginUser}
