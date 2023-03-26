
import { ArticleService } from '../../Services/Article-service'
import { useState,useEffect } from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Listarticles = () => {
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

 
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >References</StyledTableCell>
            <StyledTableCell align="right">designation</StyledTableCell>
            <StyledTableCell align="right">marque</StyledTableCell>
            <StyledTableCell align="right">prixAchat</StyledTableCell>
            <StyledTableCell align="right">prixVente</StyledTableCell>
            <StyledTableCell align="right">qtestock</StyledTableCell>
            <StyledTableCell align="right">caracteristiques</StyledTableCell>
            <StyledTableCell align="right">imageartpetitf</StyledTableCell>
            <StyledTableCell align="right">categorieID</StyledTableCell>
            <StyledTableCell align="right">scategorieID</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((row) => (

            <StyledTableRow key={row.References}>
              <StyledTableCell component="th" scope="row">
                {row.References}
              </StyledTableCell>
              <StyledTableCell align="right">{row.designation}</StyledTableCell>
              <StyledTableCell align="right">{row.marque}</StyledTableCell>
            <StyledTableCell align="right">{row.prixAchat}</StyledTableCell>
            <StyledTableCell align="right">{row.prixVente}</StyledTableCell>
            <StyledTableCell align="right">{row.qtestock}</StyledTableCell>
            <StyledTableCell align="right">{row.caracteristiques}</StyledTableCell>
            <StyledTableCell align="left"><img src={`/${row.imageartpetitf}`} alt="" width="100"/></StyledTableCell>
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
  )
}

export default Listarticles