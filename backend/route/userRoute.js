const express = require("express")
const {createUser, getUser, getUsers, loginUser, deleteUser} = require("../controller/userController")

const userrouter = express.Router()

userrouter
.post("/login", loginUser)
.get("/user/:id", getUser)
.get("/users", getUsers)
.post("/usercreate", createUser)
.delete("/userdelete/:id", deleteUser)

module.exports = userrouter
