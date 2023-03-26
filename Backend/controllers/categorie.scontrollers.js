import mongoose from 'mongoose';
import Scategorie from '../models/scategories.js';
import Categorie from '../models/categorie.js' ; 
export const getSCategories = async (req, res) => {
    try {
    const scat = await
    Scategorie.find().populate("categorieID").exec();
    res.status(200).json(scat);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    }
    
    
    export const createSCategorie = async (req, res) => {
         
        const newSCategorie = new Scategorie(req.body)  
        try {
        await newSCategorie.save();
        res.status(201).json(newSCategorie );
        } catch (error) {
        res.status(409).json({ message: error.message });
        }
        }

export const getSCategorieByID =async(req,res) => {
    try {
        const cat =await Categorie.findById(req.params.id) ; 
        res.status(200).json(cat) ;
    }catch (error) {
        res.status(404).json({message:error.message}) ;
    }
}

export const updateSCategorie =async(req,res) => {
    try {
        const { id } =req.params ;

        /*if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`pas de categorie avec un id : ${id}`) ;*/
        const cat1= req.body   
        await Scategorie.findByIdAndUpdate(id, cat1) ;
        res.json(cat1) ; 


    }catch (error) {
        res.status(404).json({message:error.message}) ;
    }
}


export const deleteSCategorie =async(req,res) => {
    try {
        const { id } =req.params ;
        /*if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`pas de categorie avec un id : ${id}`) ;*/
        const cat1=req.body 
        await Categorie.findByIdAndDelete(id) ;
        res.json({ message: "Scategorie deleted successfully." });

    }catch (error) {
        res.status(404).json({message:error.message}) ;
    }
}
export const getSCategorieByCAT =async(req,res) => {
    try {
        var result = await Scategorie.find({ categorieID : req.params.categorieID})
        res.send(result) ;
    } catch (err) {
          res.status(500).send(err) ;
    }
}