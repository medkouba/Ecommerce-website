import mongoose from "mongoose"
import Categorie from "./categorie.js" ; 
const categorieSchema=mongoose.Schema({
    nomscategorie : {type : String ,required :true,unique:true} ,
    imagecat : {type :String,required :false,unique:true} ,
    categorieID :{type:mongoose.Schema.Types.ObjectId, ref:Categorie}
})

const Scategorie =mongoose.model('Scategorie',categorieSchema) ;
export default Scategorie


