const {Schema, model} = require("mongoose")

const userSchema = new Schema ({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
},{
    toJSON:{virtuals:true}
})

userSchema.virtual("playlists", {
    ref:"Playlist",
    localField:"_id",
    foreignField:"user"
})

const User = model("User", userSchema)
module.exports = User