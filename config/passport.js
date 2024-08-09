const LocalStrategy=require('passport-local').Strategy
const {Author}= require('../models/author.model')
module.exports=function(passport){
    passport.serializeUser((author,done)=>{
        done(null,author.id)
    })
    passport.deserializeUser((id,done)=>{
        Author.findById(id,(err,author)=>{
            done(err,author)
        })
    })
    passport.use(
        'local-signup',
        {
            usernameField:'email',
            passwordField:'password',
            passReqToCallback:true,
        },
 (req,email,password,done)=>{
  Author.findOne({email},async(err,author)=>{
      if(err) done(err);
      if(author)return done(  null,false, req.flash('login message','no user found'));

const newAuthor =new Author({
    name:req.bodyname,
    email,password
})
await newAuthor.save()
return done(null,author)
                    
            });
        }
    );

    passport.use(
        'local-signin',
        {
            usernameField:'email',
            passwordField:'password',
            passReqToCallback:true,
        },
 (req,email,password,done)=>{
  Author.findOne({email},async(err,author)=>{
      if(err) done(err);
      if(!author)return done(  null,false, req.flash('login message','no user found'));


                    
 author.comparePassword(password,(err,isMatch)=>{
 if(!isMatch)
  return done( null, false, req.flash("login message","Email and password do not match") );
          return done(null,author);
                   })
                  
            });
        }
    );
};