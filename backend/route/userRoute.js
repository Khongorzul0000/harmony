const express = require("express")
const {createUser, getUser, getUsers, loginUser} = require("../controller/userController")

const userrouter = express.Router()

userrouter
.post("/login", loginUser)
.get("/user/:id", getUser)
.get("/users", getUsers)
.post("/usercreate", createUser)

module.exports = userrouter
