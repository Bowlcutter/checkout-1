import React, {useContext, useState} from "react";
import {products} from "../../products"

export const Shop = () => {

    return (
    <div className="shop">
        <div className="shopTitle">
            <h1 className="Kurv">Kurv</h1>
        </div>
        <div className="kurv">
            {products.map(product =>
            <li
                key={product.id}
            >
                {product.name}
                {' '}{product.price} {product.currency}
                {' '}<MyButton />

            </li>)}


        </div>
    </div>
    );
};

function MyButton() {
    const [count, setCount] = useState(1);

    function handleClick() {
        setCount(c => c + 1);
    }

    return (
        <button onClick={handleClick}>
            Antal: {count}
        </button>
    );
}