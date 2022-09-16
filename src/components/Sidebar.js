import ListGroup from 'react-bootstrap/ListGroup';

const Sidebar = (props) =>{
    return(
        <div className="p-2 bg-dark text-white Sidebar">
            <p className="text-center text-white-50 bg-dark fs-2">Categories</p>
            <ListGroup className="category_list" defaultActiveKey="#home">
                <ListGroup.Item className="fw-bold text-center" onClick={()=>props.setCategory('')} action href={"#home"} variant="dark">
                    All
                </ListGroup.Item>
                {props.products.map(product=>
                <ListGroup.Item key={product.id} className="fw-bold text-center" onClick={()=>props.setCategory(product.category.name.toLowerCase())} action href={"#"+product.category.name} variant="dark">
                    {product.category.name}
                </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    )
}

export default Sidebar