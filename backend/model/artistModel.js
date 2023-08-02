const {Schema, model } = require("mongoose")

const artistSchema = new Schema (
    {
        name:{
            type:String
        },
        createdAt:{
            type:Date,
            default:Date.now()
        },
        song:{
            type:Schema.Types.ObjectId,
            ref:"Song",
            required:true
        }
    },{
        toJSON:{virtuals:true}
})


const Artist = model('Artist', artistSchema)

module.exports = Artist