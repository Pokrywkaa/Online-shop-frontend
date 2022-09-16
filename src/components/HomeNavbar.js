import { Form, Button, Nav, Navbar, NavDropdown} from 'react-bootstrap'

const HomeNavbar = () =>{
    return(
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
        )
        }

export default HomeNavbar