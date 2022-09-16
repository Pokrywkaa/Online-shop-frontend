import { Link, useParams } from 'react-router-dom';

import Sidebar from './Sidebar'


const Products = (props) =>{
      return(
        <div className="product-div">
            <div id="img-wrapper">
            {props.filtred_products.map(product=>
            <div key={product.id} >
                <Link to={"product_detail/"+product.id} onClick={()=>props.setDetail(product.id, product.name.toLowerCase().replace(" ", "-"))}>
                  <img className='product_image' src={product.image}/>
                </Link>
                <p className="text-center product_name">{product.name}</p>
                <p className="text-center product_price">{product.price}$</p>
            </div>    
                )}
            </div>
            <Sidebar products={props.products} setCategory={props.setCategory}/>
        </div>
      )
}

export default Products