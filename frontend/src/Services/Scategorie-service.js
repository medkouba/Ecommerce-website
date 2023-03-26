
import Api from '../Axios/Api' 
const Scategorie_API="/scategories"

const fetchScategories=async()=> {
    return await Api.get(Scategorie_API) ;
}

const fetchScategoriesByID=async(ScategorieID)=> {
    console.log(ScategorieID)
    return await Api.get(Scategorie_API+'/cat/'+ScategorieID) ;
}
const addScategorie=async(Scategorie)=> {
    return await Api.post(""+Scategorie_API, Scategorie);
    } 
const editScategorie=async(Scategorie)=> {
        return  Api.put(Scategorie_API+'/'+Scategorie._id, Scategorie);
        } 


const deleteScategorie=async(ScategorieID)=> {
    return await Api.delete(Scategorie_API+'/'+ScategorieID) ;
}
export const ScategorieService ={fetchScategories,deleteScategorie,fetchScategoriesByID,addScategorie,editScategorie} ; 

