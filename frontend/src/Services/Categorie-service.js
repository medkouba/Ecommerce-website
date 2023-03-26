
import Api from '../Axios/Api' 
const Categorie_API="/categories"

const fetchCategories=async()=> {
    return await Api.get(Categorie_API) ;
}

const fetchCategoriesByID=async(CategorieID)=> {
    return await Api.get(Categorie_API+'/cat/'+CategorieID) ;
}
const addCategorie=async(Categorie)=> {
    return await Api.post(""+Categorie_API, Categorie);
    } 
const editCategorie=async(Categorie)=> {
        return  Api.put(Categorie_API+'/'+Categorie._id, Categorie);
        } 


const deleteCategorie=async(CategorieID)=> {
    return await Api.delete(Categorie_API+'/'+CategorieID) ;
}
export const CategorieService ={fetchCategories,deleteCategorie,fetchCategoriesByID,addCategorie,editCategorie} ;