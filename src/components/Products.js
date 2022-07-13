import { useState, useEffect } from 'react'

import productService from '../services/products'

import { Button, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

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
              <Navbar.Brand style={{ marginLeft: "20px;"} }href="#home">Online Shop</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            {products.map(product=>
            <div key={product.id} >
                <img className='product_image' src={product.image}/>
                <p>{product.name}</p>
            </div>    
                )}
        </div>
      )
}

export default Products