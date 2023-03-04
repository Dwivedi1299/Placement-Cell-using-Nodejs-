const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Placement_Cell')
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error is connecting'));
db.once('open',function(){
    console.log('successfully connected')
})