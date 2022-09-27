import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shopping.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

const Shopping = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }

        }
        setCart(savedCart);
    }, [products])

    const addedProductDetails = (p) => {
        const { id } = p;

        let newCart = [];
        const alreadyExistingProduct = cart.find(product => product.id === p.id);
        if (!alreadyExistingProduct) {
            p.quantity = 1;
            newCart = [...cart, p];
        }
        else {
            const restProduct = cart.filter(product => product.id !== p.id);
            alreadyExistingProduct.quantity = alreadyExistingProduct.quantity + 1;
            newCart = [...restProduct, alreadyExistingProduct];
        }
        setCart(newCart);
        addToDb(id);
    }

    const clearAll = () =>{
        localStorage.clear();
        setCart([]);
    };

    return (
        <div className='shopping-page px-20'>

            <div className='grid grid-cols-3 gap-4 my-10'>
                {
                    products.map(product => <Product product={product} addedProductDetails={addedProductDetails} key={product.id}></Product>)
                }
            </div>

            <div>
                <Cart cart={cart} clearAll={clearAll}></Cart>
            </div>
        </div>
    );
};

export default Shopping;