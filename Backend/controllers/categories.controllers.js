import Categorie from '../models/categorie.js';
import mongoose from 'mongoose';
import express from 'express';
const router = express.Router();


export const getCategories = async (req, res) => {
try {
const cat = await Categorie.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}

export const getCategorieByID = async (req, res) => {
try {
const {id} = req.params ; 
if (id.match(/^[0-9a-fA-F]{24}$/)) {
    const cat = await Categorie.findById(id);
    res.status(200).json(cat);
  }

} catch (error) {
res.status(404).json({ message: error.message });
}
}

export const createCategorie = async (req, res) => {
const newCategorie = new Categorie(req.body) 
try {
await newCategorie.save();
res.status(201).json(newCategorie );
} catch (error) {
res.status(409).json({ message: error.message });
}
}

export const updateCategorie= async (req, res) => {
const { id } = req.params;
const { nomcategorie, imagecategorie} = req.body;
if (id.match(/^[0-9a-fA-F]{24}$/)) {
    const cat1 = {nomcategorie:nomcategorie,imagecategorie:imagecategorie, _id: id };
    await Categorie.findByIdAndUpdate(id, cat1);
    res.json(cat1);
  }
  /*if (!mongoose.Types.ObjectId.isValid(id)) return
  res.status(404).send(`pas de categorie avec un id: ${id}`);*/
}


export const deleteCategorie = async (req, res) => {
const { id } = req.params;
/*if (!mongoose.Types.ObjectId.isValid(id)) return
res.status(404).send(`pas de categorie avec l'ID: ${id}`);*/
await Categorie.findByIdAndDelete(id);
res.json({ message: "categorie deleted successfully." });
}

