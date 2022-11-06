import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewOrders from '../ReviewOrders/ReviewOrders';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    console.log(products, initialCart);
    const [cart, setCart] = useState(initialCart);
    console.log(products, initialCart, cart);
    const removeAddedItems = (id) => {
        const afterRemoveProducts = cart.filter(p => p._id !== id);
        setCart(afterRemoveProducts);
        removeFromDb(id);
    }
    const clearAll = () => {
        localStorage.clear();
        setCart([]);
    };
    return (
        <div className='shopping-page px-20'>
            <div className=''>
                {
                    cart.map(product => <ReviewOrders Orders product={product} key={product._id} removeAddedItems={removeAddedItems}></ReviewOrders>)
                }
                {
                    cart.length === 0 &&
                    <div>
                        <h2 className='text-warning mt-10 text-2xl font-bold'>No Item In Your Order Cart. Please <Link to="/"><span className='text-secondary'>Add To Cart</span></Link> Something.</h2>
                    </div>
                }
            </div>

            <div>
                <Cart cart={cart} clearAll={clearAll}>
                    <button className="btn btn-warning text-white hover:bg-secondary mx-4">
                        <Link to="/shipping">
                            <button><FontAwesomeIcon className='mr-2' icon={faShippingFast}></FontAwesomeIcon>Continue Shipping</button>
                        </Link>
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;