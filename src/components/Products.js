import { useState, useEffect } from 'react'
import { Form, Button, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'


import productService from '../services/products'

import Sidebar from './Sidebar.js' 

const Products = () =>{
    const [products, setProduct] = useState([])

    const hook = () =>{
      productService
      .getAll()
      .then(initialProduct=>{
          setProduct(initialProduct)
        })
      }
      useEffect(hook, [])

      return(
        <div className="product-div">
          <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand style={{ marginLeft: "20px"} }href="#home">Online Shop</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="container-fluid">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <NavDropdown title="Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">Contact</Nav.Link>
                  <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button id="search-btn" variant="outline-success">Search</Button>
                </Form>
                  <Nav.Link className="ms-auto" href="#login">Login</Nav.Link>
                  <Nav.Link href="#register">Register</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <div id="img-wrapper">
            {products.map(product=>
            <div key={product.id} >
                <img className='product_image' src={product.image}/>
                <p className="text-center product_name">{product.name}</p>
                <p className="text-center product_price">{product.price}$</p>
            </div>    
                )}
            </div>
        </div>
      )
}

export default Products