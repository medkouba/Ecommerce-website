import Api from '../Axios/Api' 
const ARTICLE_API="/articles"

const fetchArticles=async()=> {
    return await Api.get(ARTICLE_API) ;
}

const fetchArticlesByID=async(articleID)=> {
    return await Api.get(ARTICLE_API+'/'+articleID) ;
}
const addArticle=async(article)=> {
    return await Api.post(""+ARTICLE_API, article);
    } 
    
const editArticle=async(article)=> {
        return  Api.put(ARTICLE_API+'/'+article._id, article);
        } 


const deleteArticle=async(articleID)=> {
    return await Api.delete(ARTICLE_API+'/'+articleID) ;
}
export const ArticleService ={fetchArticles,deleteArticle,fetchArticlesByID,addArticle,editArticle} ; 