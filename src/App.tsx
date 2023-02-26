import React from 'react';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/navbar"
import {Shop} from './pages/shop/shop'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
    const [products] = useState([
        {
            id: "vitamin-d-90-100",
            name: "D-vitamin, 90ug, 100 stk",
            price: 116,
            currency: "DKK",
            rebateQuantity: 3,
            rebatePercent: 10,
            upsellProductId: null
        },
        {
            id: "vitamin-c-500-250",
            name: "C-vitamin, 500mg, 250 stk",
            price: 150,
            currency: "DKK",
            rebateQuantity: 2,
            rebatePercent: 25,
            upsellProductId: "vitamin-c-depot-500-250"
        },
        {
            id: "vitamin-c-depot-500-250",
            name: "C-vitamin Depot, 500mg, 250 stk",
            price: 175,
            currency: "DKK",
            rebateQuantity: 3,
            rebatePercent: 10,
            upsellProductId: null
        },
        {
            id: "fish-oil-1000-120",
            name: "Omega 3 fiskeolie, 1000mg, 120 stk",
            price: 69,
            currency: "DKK",
            rebateQuantity: 5,
            rebatePercent: 10,
            upsellProductId: null
        },
        {
            id: "coffee-grinder",
            name: "Kaffekværn",
            price: 145,
            currency: "DKK",
            rebateQuantity: 0,
            rebatePercent: 0,
            upsellProductId: "coffee-grinder-pro"
        },
        {
            id: "coffee-grinder-pro",
            name: "Kaffekværn Præcision",
            price: 320,
            currency: "DKK",
            rebateQuantity: 0,
            rebatePercent: 0,
            upsellProductId: null
        },
        {
            id: "toothbrush",
            name: "Tandbørste, 5stk",
            price: 40,
            currency: "DKK",
            rebateQuantity: 0,
            rebatePercent: 0,
            upsellProductId: "toothbrush-bamboo"
        },
        {
            id: "toothbrush-bamboo",
            name: "Tandbørste i bambus, 3stk",
            price: 40,
            currency: "DKK",
            rebateQuantity: 2,
            rebatePercent: 10,
            upsellProductId: null
        },
        {
            id: "trimmer",
            name: "Barbermaskine",
            price: 200,
            currency: "DKK",
            rebateQuantity: 0,
            rebatePercent: 0,
            upsellProductId: "trimmer-battery"
        },
        {
            id: "trimmer-battery",
            name: "Barbermaskine m batteri",
            price: 350,
            currency: "DKK",
            rebateQuantity: 0,
            rebatePercent: 0,
            upsellProductId: null
        },
        {
            id: "hair-clip",
            name: "Hårklemme",
            price: 25,
            currency: "DKK",
            rebateQuantity: 2,
            rebatePercent: 20,
            upsellProductId: "hair-clip-large"
        },
        {
            id: "hair-clip-large",
            name: "Hårklemme, stor",
            price: 45,
            currency: "DKK",
            rebateQuantity: 0,
            rebatePercent: 0,
            upsellProductId: null
        },
        {
            id: "scarf-cotton",
            name: "Tørklæde, bomuld",
            price: 100,
            currency: "DKK",
            rebateQuantity: 2,
            rebatePercent: 10,
            upsellProductId: "scarf-wool"
        },
        {
            id: "scarf-wool",
            name: "Tørklæde, uld",
            price: 150,
            currency: "DKK",
            rebateQuantity: 2,
            rebatePercent: 10,
            upsellProductId: "scarf-silk"
        },
        {
            id: "scarf-silk",
            name: "Tørklæde, silke",
            price: 250,
            currency: "DKK",
            rebateQuantity: 2,
            rebatePercent: 10,
            upsellProductId: null
        },
        {
            id: "cap",
            name: "Kasket",
            price: 150,
            currency: "DKK",
            rebateQuantity: 2,
            rebatePercent: 10,
            upsellProductId: "cap-flat"
        },
        {
            id: "cap-flat",
            name: "Kasket, sixpence",
            price: 590,
            currency: "DKK",
            rebateQuantity: 0,
            rebatePercent: 0,
            upsellProductId: null
        },
        {
            id: "teddy",
            name: "Plysbamse",
            price: 75,
            currency: "DKK",
            rebateQuantity: 0,
            rebatePercent: 0,
            upsellProductId: "teddy-large"
        },
        {
            id: "teddy-large",
            name: "Plysbamse, stor",
            price: 150,
            currency: "DKK",
            rebateQuantity: 0,
            rebatePercent: 0,
            upsellProductId: null
        },
        {
            id: "kids-songbook",
            name: "De små synger",
            price: 120,
            currency: "DKK",
            rebateQuantity: 0,
            rebatePercent: 0,
            upsellProductId: "kids-songbook-hardcover"
        },
        {
            id: "kids-songbook-hardcover",
            name: "De små synger, indbundet",
            price: 180,
            currency: "DKK",
            rebateQuantity: 0,
            rebatePercent: 0,
            upsellProductId: null
        },
        {
            id: "coffeebeans-500g",
            name: "Kaffebønner",
            price: 50,
            currency: "DKK",
            rebateQuantity: 4,
            rebatePercent: 25,
            upsellProductId: "coffeebeans-organic-500g"
        },
        {
            id: "coffeebeans-organic-500g",
            name: "Kaffebønner, økologiske",
            price: 60,
            currency: "DKK",
            rebateQuantity: 2,
            rebatePercent: 10,
            upsellProductId: null
        },
        {
            id: "the-english-100g",
            name: "Sort te, 100g",
            price: 20,
            currency: "DKK",
            rebateQuantity: 4,
            rebatePercent: 25,
            upsellProductId: "the-darjeeling-100g"
        },
        {
            id: "the-darjeeling-100g",
            name: "Sort te, Darjeeling, 100g",
            price: 30,
            currency: "DKK",
            rebateQuantity: 4,
            rebatePercent: 25,
            upsellProductId: "the-organic-100g"
        },
        {
            id: "the-organic-100g",
            name: "Sort te, Darjeeling, økologisk, 100g",
            price: 35,
            currency: "DKK",
            rebateQuantity: 2,
            rebatePercent: 10,
            upsellProductId: null
        },
        {
            id: "sugar-white-1kg",
            name: "Sukker, hvidt, 1000g",
            price: 30,
            currency: "DKK",
            rebateQuantity: 4,
            rebatePercent: 25,
            upsellProductId: "sugar-cane-1kg"
        },
        {
            id: "sugar-cane-1kg",
            name: "Rørsukker, 1000g",
            price: 40,
            currency: "DKK",
            rebateQuantity: 4,
            rebatePercent: 25,
            upsellProductId: "sugar-organic-1kg"
        },
        {
            id: "sugar-organic-1kg",
            name: "Rørsukker, økologisk, 1000g",
            price: 45,
            currency: "DKK",
            rebateQuantity: 2,
            rebatePercent: 10,
            upsellProductId: null
        }
    ]);



    return (
        <div className="App">
            <h1>Butik</h1>
            <div className="products">
                {products.map(product => (
                    <div>
                        {product.name}
                        {' '}{product.price} {product.currency}
                        {' '}<button className="købknap">Køb</button>
                    </div>
                ))}
            </div>

            <div className="kurv">
                <div className="row">
                    <div className="col-1">
                        Kurv
                    </div>
                    <div className="col">
                        Pris
                    </div>
                    <div className="col">
                        Stk
                    </div>
                    <div className="col">
                        Beløb
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;

/*function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(c => c + 1);
    }

    return (
        <button onClick={handleClick}>
            Amount: {count}
        </button>
    );
}

function ShoppingList() {

    const listItems = products.map(product =>
        <li
            key={product.id}
            style={{
                color: product.rebatePercent < 20 ? 'black' : 'darkgreen'
            }}
        >
            {product.name},
            {' '}{product.price}{product.currency}
            {' '}<MyButton/>
        </li>
    );

    return (
        <article>
            <h1>Shopping List</h1>
            <ul>{listItems}</ul>
        </article>
    );
}*/