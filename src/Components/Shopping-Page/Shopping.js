import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Product from '../Product/Product';
import './Shopping.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';

const Shopping = () => {
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const perPageProduct = 9;
    const page = Math.ceil(count / perPageProduct);

    useEffect(() => {
        const url = `http://localhost:5000/products?currentPage=${currentPage}&perPageProduct=${perPageProduct}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
                setProducts(data.products)
            })
    }, [currentPage]);



    useEffect(() => {
        const storedCart = getStoredCart();
        if (storedCart) {
            const ids = Object.keys(storedCart);
            console.log(ids);
            const savedCart = [];

            fetch("http://localhost:5000/productsByIds", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(ids)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    for (const id in storedCart) {
                        const addedProduct = data.find(product => product._id === id);
                        if (addedProduct) {
                            const quantity = storedCart[id];
                            addedProduct.quantity = quantity;
                            savedCart.push(addedProduct);
                        }

                    }
                    setCart(savedCart);

                })
        }

    }, [products])

    const addedProductDetails = (p) => {
        const { _id } = p;
        console.log(p);

        let newCart = [];
        const alreadyExistingProduct = cart.find(product => product._id === p._id);
        if (!alreadyExistingProduct) {
            p.quantity = 1;
            newCart = [...cart, p];
        }
        else {
            const restProduct = cart.filter(product => product._id !== p._id);
            alreadyExistingProduct.quantity = alreadyExistingProduct.quantity + 1;
            newCart = [...restProduct, alreadyExistingProduct];
        }
        setCart(newCart);
        addToDb(_id);
    }

    const clearAll = () => {
        localStorage.clear();
        setCart([]);
    };

    return (
        <div className='shopping-page px-20'>

            <div className='mb-10'>
                <div className='grid grid-cols-3 gap-4 my-10'>
                    {
                        products.map(product => <Product product={product} addedProductDetails={addedProductDetails} key={product._id}></Product>)
                    }
                </div>
                <div className="btn-group flex justify-center">
                    <button onClick={() => setCurrentPage(currentPage - 1)} className='btn'>Previews</button>
                    {
                        [...Array(page).keys()].map(num =>
                            <button
                                onClick={() => setCurrentPage(num)}
                                key={num}
                                className={`btn ${currentPage === num && "btn-primary"}`}>
                                {num + 1}
                            </button>)
                    }
                    <button onClick={() => setCurrentPage(currentPage + 1)} className='btn'>Next</button>
                </div>
            </div>

            <div>
                <Cart cart={cart} clearAll={clearAll}>
                    <button className="btn btn-warning text-white hover:bg-secondary mx-4">
                        <Link to="/orders">
                            <button><FontAwesomeIcon className='mr-2' icon={faShoppingBag}></FontAwesomeIcon>Review Order</button>
                        </Link>
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Shopping;