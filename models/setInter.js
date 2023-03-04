const mongoose=require('mongoose');
const setInterSchema=new mongoose.Schema({

    company :{
        type : String,
        required: true

    },
    Date : {
        type : Date,
        required: true

    }

});

const SetInter=mongoose.model('SetInter',setInterSchema);
module.exports=SetInter;