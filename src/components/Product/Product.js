import React from "react";
import './Product.css';

const Product = (props) => {

    return (
        <section className="Product">
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.price}</div>
                <div className="Author">{props.category}</div>
            </div>
        </section>
    );
}

export default Product;