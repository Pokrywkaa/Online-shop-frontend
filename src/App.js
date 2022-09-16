import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import productService from './services/products';

import Products from "./components/Products";
import DetailProduct from "./components/DetailProduct";
import HomeNavbar from './components/HomeNavbar';

const App = () => {
  const [product, setProduct] = useState([])
  const [id, setID] = useState('')
  const [name, setName] = useState('')
  const [products, setProducts] = useState([])
  const [filtred_products, setFiltredProduct] = useState([])
  const [category, setCategory] = useState('')

  const didMountRef = useRef(false);

  const hook = () =>{
    productService 
    .getAll()
    .then(initialProduct=>{
        setProducts(initialProduct)
      })
    }
    useEffect(hook, [])
  
    const hook_byCategory = () =>{
      productService
      .getByCategory(category)
      .then(initialProduct=>{
          setFiltredProduct(initialProduct)
        })
      }
    useEffect(hook_byCategory, [category])
      
    const hook_product = () =>{
     if (name && id) { productService 
      .getProduct(id, name)
      .then(initialProduct=>{
          setProduct(initialProduct)
        })}
      }
      useEffect(hook_product, [id, name])

      const setDetail = (id, name) =>{
        setID(id);
        setName(name)  
      }
      console.log(product) 
  return(
    <div className="App"> 
      <HomeNavbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products products={products} 
              filtred_products={filtred_products} setCategory={setCategory} setDetail={setDetail}/>}/>
          <Route path="/product_detail/:id" element={<DetailProduct product={product}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
