import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'


const DetailProduct = (props) => {

    const { id } = useParams();
    return(
        <div>
            <h1>{id}</h1>
            <h1>{props.product.id}</h1>
            <h1>{props.product.price}</h1>
            <h1>{props.product.description}</h1>
        </div>
    )
}

export default DetailProduct 