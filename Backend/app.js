import express from 'express' 
import mongoose from "mongoose"
import dotenv from 'dotenv'
import categorieRouter from "./routes/routerCategorie.js"
import scategorieRouter from "./routes/routerScategarie.js"
import articleRouter from "./routes/article.route.js"
import cors from "cors" 

//import userRouter from './routes/user.route.js'

dotenv.config(); 
const app=express()
app.use(cors())
//BodyParser Middleware
app.use(express.json())
// Connection à la base de donné
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology :true 
} )

.then(() => {console.log("connection a la base de donnés reussie");})
.catch(err =>{
    console.log('Impossible de se connecter à la base de données', err)
    process.exit()
})
app.use('/api/categories',categorieRouter);
app.use('/api/scategories',scategorieRouter) ; 
app.use('/api/articles',articleRouter);
/*app.use('/api/users',userRouter)*/

app.get('/',(req,res)=>{
    res.send("page de demarrage") ;
})

app.listen(process.env.PORT , ()=>{
    console.log(`Server is listening on port ${process.env.PORT}`); 
})