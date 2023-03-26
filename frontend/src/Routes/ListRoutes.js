import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Listarticle from '../Components/Articles/Listarticles';
import Insertarticle from '../Components/Articles/Insertarticle.js';

import Listcategorie from '../Components/Categories/Listcategorie.js';
import Editcategorie from '../Components/Categories/Editcategorie.js';
import Insertcategorie from '../Components/Categories/Insertcategorie.js';

import Listscategorie from '../Components/Scategories/Listscategorie.js';
import Editscategorie from '../Components/Scategories/Editscategorie.js';
import Insertscategorie from '../Components/Scategories/Insertscategorie.js';
import ListArticleCard from '../Components/Articles/ListArticleCard';
import ListArticleDataTable from '../Components/Articles/ListArticleDataTable';
import ModifArticle from '../Components/Articles/ModifArticle';
import CartArticle from '../Components/Articles/CartArticle';
const ListRoutes = () => {
  return (
    <Routes>
          <Route path="/art/insertart" element={<Insertarticle />} />
          <Route path="/art/listart" element={<Listarticle />} />
          <Route path="/art/card" element={<ListArticleCard />} />
          <Route path="/art/Dtable" element={<ListArticleDataTable />} />
          <Route path="/art/cart" element={<CartArticle />} />
          <Route path="/cat/editcat/:id" element={<Editcategorie />} />
          <Route path="/cat/insertcat" element={<Insertcategorie />} />
          <Route path="/cat/listcat" element={<Listcategorie />} />

          <Route path="/scat/editscat/:id" element={<Editscategorie />} />
          <Route path="/scat/insertscat" element={<Insertscategorie />} />
          <Route path="/scat/listscat" element={<Listscategorie />} />
          <Route path="/Articles/add"  element={<Insertarticle />} />
          <Route path="/Article/edit/:id"  element={<ModifArticle />} />

        </Routes>
  )
}

export default ListRoutes
