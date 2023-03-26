import React from 'react'
import { ArticleService } from '../../Services/Article-service'
import { useState,useEffect } from 'react'
import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
const ListArticleCard = () => {
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
    const { addItem, totalItems } = useCart();

  return (
    <div className="container">
      <AppBar position="static" color='primary'>
       <Toolbar>
       <Button color="inherit"><Link to="/art/cart" style={{"color":"yellow","textDecoration":"none" , borderRadius:'50%',fontSize:26}}>
       {totalItems}<LocalGroceryStoreIcon sx={{ fontSize: 40 }}/></Link></Button>
       </Toolbar>

      </AppBar>
<div
style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
{articles.map((art,ind)=>{
return <Card sx={{ maxWidth: 'auto',margin: 1 }}>
<CardMedia
component="img"
alt="green iguana"
height="160"
image={`/${art.imageartpetitf}`}
/>
<CardContent>
<Typography gutterBottom variant="h6" component="div">
{art.reference}
</Typography>
<Typography variant="body2" color="text.secondary">
Prix : {art.prixVente} DT
</Typography>
</CardContent>
<CardActions>
<Button disabled={art.qtestock<=1}
variant="contained" color="secondary" size="large"
onClick={() => {
const target = {price: art.prixVente,id:art._id};
const returnedTarget = Object.assign(target,art) ; 
addItem(returnedTarget)}
}
>
{art.qtestock<=1? "OUT OF SOLD": "Add to cart"}
</Button>
</CardActions>
</Card>
})}</div>
</div>
)
}


export default ListArticleCard
