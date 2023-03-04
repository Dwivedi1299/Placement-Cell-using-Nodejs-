const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
    name :{
        type : String,
        required : true,
    

    },
    batch :{
        type : Number,
        required : true,
   

    },
    course : {
        type : String,
        required : true,
      
    },
    DSA : {
        type : Number,
        required : true,
      
    },
    WebD: {
        type : Number,
        required : true,
    
    },
    React:{
        type : Number,
        required : true,
       

    },

})
const Student=mongoose.model('Student',studentSchema);
module.exports=Student;