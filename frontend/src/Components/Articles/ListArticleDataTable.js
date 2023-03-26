import React from 'react'
import { ArticleService } from '../../Services/Article-service'
import { useState,useEffect } from 'react'
import  {ThemeProvider }  from "@mui/styles";
import  { createTheme }  from "@mui/material/styles";
import { IconButton,Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MUIDataTable from "mui-datatables";
import {toast} from 'react-toastify';

import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";

const ListArticleDataTable = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
    GetListArticles();
    },[]); 
    
    const GetListArticles=() => {
      ArticleService.fetchArticles()
      .then((res)=>{
        setArticles(res.data) ;
        console.log(articles) ;  
      })
      
       .catch(err =>{
        console.log(err);
      }) 
    }

    
      
    const delArticle= async (_id) => {
        await ArticleService.deleteArticle(_id)
        var newarticles=articles.filter((item)=>{
        return item._id!==_id
        })
        setArticles(newarticles);  
        toast("Article supprimé",{
            position: "top-right" , 
            autoClose : 5000,
            hideProgressBar: false ,
            closeOnclick : true ,
            pauseOnHover: true ,
            draggable: true ,
            progress : undefined , 
        })
        }
        
      const columns = [
        {
          label: "Référence",
          name: "reference"
         },
       {
       label: "Désignation",
       name: "designation"
       },
       {
       label: "Prix Achat",
       name: "prixAchat"
       },
       {
       label: "Prix Vente",
       name: "prixVente"
       },
       {
       label: "Marque",
       name: "marque"
       },
       {
       label: "Quatité Stock",
       name: "qtestock"
       },
       {
       name:"imageartpetitf",
       label: "Image",
       options: {
       customBodyRender : (rowData) => (
       <img style={{ height: 60, borderRadius: '50%' }} src={`/${rowData}`} alt="" />
       )
       }
       },
       {
       name:"categorieID",
       label: "Catégorie",
       options: {
       customBodyRender : (categ) => (
       categ? categ.nomcategorie : null
       )
       }
       },
       {
       name:"scategorieID",
       label: "S/Catégorie",
       options: {
       customBodyRender : (scateg) => (
       scateg? scateg.nomscategorie :null
       )
       }
       },
       {
        name: "_id",
        label: "Actions",
        options: {
        customBodyRender: (value) => (
        <div>
        <IconButton >
        { <Link to={"/Article/edit/" + value} >
        <EditIcon color='secondary' />
        </Link>
        }
        </IconButton>
        <IconButton onClick={()=>{delArticle(value)}}>
        <DeleteIcon sx={{ color: pink[500] }} />
        </IconButton>
        </div>
)
}
},

    
    ];
    
    
  return (
    <div>
      
      <h1>ListArticleDataTable</h1>
      <div style={{padding:5,margin:5}}>
<Button color="primary" startIcon={<AddCircleIcon />} variant="contained" >
{ <Link to={"/Articles/add"} style={{textDecoration: "none",color:"white"}}>Ajouter</Link>}
</Button>
</div>

{articles.length>0?
<ThemeProvider theme={createTheme()}>
<MUIDataTable title="Liste des articles" data={articles} columns={columns}/>
</ThemeProvider>
:null
}

    </div>
  )
}

export default ListArticleDataTable
