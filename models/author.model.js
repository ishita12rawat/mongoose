const {Schema,model}=require('mongoose')
const bcrypt=require('bcrypt')
const authorSchema= Schema({
    name:{
        type:String,
        required:true
    },
   email: {type:String,
    required:true,
    unique:true

    },
    password:{
        type:String,
        required:true
    }
})

authorSchema.pre('save',async function(next){
    this.password=await bcrypt.hash(this.password,10)
    next();
})
authorSchema.methods.comparePassword=function(password){
    return bcrypt.compare(password,this.password)
}
const Author=model("authors",authorSchema)

module.exports=Author;