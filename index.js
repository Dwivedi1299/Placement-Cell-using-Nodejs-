 const express=require('express');
//  const customMware=require('./config/middleware');
//  const flash=require('connect-flash');
 const app=express();
 const port=8000;
 app.use(express.urlencoded());
 const db = require('./config/mongoose');

 //set routes

 //

 //ser views ejs
 app.set('view engine','ejs');
 app.set('views','./views');
//  app.use(flash()); 
//  app.use(customMware.setFlash);


 app.use('/',require('./routes'));
 app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
