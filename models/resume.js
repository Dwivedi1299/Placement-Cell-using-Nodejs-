const mongoose=require('mongoose');
const resumeSchema=new mongoose.Schema({
    FName: {
        type: String,
        required: true,
        unique: true

    },
    LName:{ type: String,
        required: true,
        unique: true},

        Address:{
            type: String,
            required: true,
            unique: true
        },
        Mobile_No:{
            type: Number,
            required: true,
            unique: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        
        Password:{
            type: String,
            required: true,
            
        },
})
const Resume=mongoose.model('Resume',resumeSchema);
module.exports=Resume;