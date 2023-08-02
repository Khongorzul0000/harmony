const {Schema, model} = require("mongoose")

const playlistSchema = new Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"Üser",
        required:true
    }
},{
    toJSON:{virtuals:true}
})

playlistSchema.virtual("songs", {
    ref:"Song",
    localField:"_id",
    foreignField:"playlist"
})

const Playlist = model("Playlist", playlistSchema)
module.exports = Playlist