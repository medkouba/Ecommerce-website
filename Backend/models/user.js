import mongoose from "mongoose"
const userSchema=mongoose.Schema({
    nomuser  : {type : String ,required :true} ,
    tel : {type :String,required :false},
    email : {type :String,required :true},
    password : {type :String,required :true},
    register_date : {type :String,required :true},

})
const user =mongoose.model('user',userSchema) ;
export default user