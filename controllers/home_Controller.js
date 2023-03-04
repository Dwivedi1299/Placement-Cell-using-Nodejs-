const Resume = require("../models/resume");
const Student=require("../models/student");
const  SetInter=require("../models/setInter");

module.exports.home=function(req,res){
    return res.render('home');
}

module.exports.signin=function(req,res){
    return res.render('SignIn');
}

module.exports.signup=function(req,res){
    return res.render('SignUp');
}
module.exports.PlaceCell=function(req,res){
    return res.render('cell');
}

module.exports.Interview=function(req,res){
    return res.render('interview');
}

module.exports.createS_I=function(req,res){
    Resume.findOne({email:req.body.email},function(err,resume)
    {
        if(err){console.log('error is finding user in Singin') ; return;};
        if(!resume){
            Resume.create(req.body,function(err,resume){
                if(err){
                    console.log('error is creating user ',err);return;
                }
                req.flash('success','user successfully logged in');
                return res.redirect('/SignIn');
            })
        } else{
            return res.redirect('back');
        }
           })
}

module.exports.createS_U=function(req,res){
    Resume.findOne({email:req.body.email},function(err,resume){
        console.log(req.body);
        if(err){console.log('error in finding user in signing up'); return}
        if(resume){
            if(resume.Password == req.body.Password){
                return res.redirect('/cell');
            }
            return res.redirect('back');
        }
        else{
            return res.redirect('back');
        }
    })

}

module.exports.create_C= function(req,res)
//     Student.findOne({course:req.body.course},function(err,student){
//         if(err){console.log('error is creating student data');return;};
//         if(!student){
//             Student.create(req.body,function(err,student){
//                 if(err){
//                     console.log('error is creating data',err);return;
//                 }
//                 return res.redirect('/cell');
//             })
//         }else{
//             return res.redirect('/inter');
//         }

//     })

// }
{
    Student.findOne({course:req.body.course},function(err,student)
    {
        if(err){console.log('error is finding user in Singin') ; return;};
        if(!student){
            Student.create(req.body,function(err,student){
                if(err){
                    console.log('error is creating user ',err);return;
                }
                // req.flash('success','user successfully logged in');
                if(req.body.DSA<100 && req.body.WebD<100 && req.body.React<100){
                    return res.render("not");
                }
                else{
                return res.redirect('/inter');
                }
            })
        } else{
            return res.redirect('back');
        }
           })
}

module.exports.createI=function(req,res){
    SetInter.findOne({company:req.body.company},function(err,setInter)
    {
        if(err){console.log('error is finding user in Singin') ; return;};
        if(!setInter){
           SetInter.create(req.body,function(err,setInter){
                if(err){
                    console.log('error is creating user ',err);return;
                }
              
                return res.redirect('/SignIn');
            })
        } else{
            return res.redirect('back');
        }
           })

}