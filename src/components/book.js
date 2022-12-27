import React from "react";
import { useProvider } from '../context';
import { Link , useParams} from "react-router-dom";
const Book = ({id, title, image, authors, price}) => {
    const {dispatch} = useProvider();
    const{pageID, category} = useParams();
    return <article className="book-product" >
       
        <Link to={`/page/${pageID}/${category}/book/${id}`}>
            <h4>{title.length > 41 ? `${title.substring(0, 39)}...` : title}</h4>
            <img  src={image} alt={title} />
        </Link>
        <p className="author">By: {authors}</p>
        <p className="price">${price}.99</p>
        <button onClick={() => dispatch({type: 'ADD_TO_CART', payload: id})}>Add to cart</button>
        
    </article>
}      

export {Book}

