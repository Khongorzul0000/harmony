const {Schema, model} = require("mongoose")

const songSchema = new Schema(
    {
        name:{
            type:String
        },
        createdAt:{
            type:Date,
            default:Date.now()
        },
        playlist:{
            type:Schema.Types.ObjectId,
            ref:"Playlist",
            required:true
        },
    } ,
    {
        toJSON: { virtuals: true },
})

songSchema.virtual("artists", {
    ref:"Artist", 
    localField:"_id", 
    foreignField:"song"
})

const Song = model("Song", songSchema)
module.exports = Song