import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Cart = ({ cart, clearAll, children }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total / 100) * 10;
    const grandTotal = total + shipping + tax;

    return (
        <div className='bg-[#95a5a6] ml-4 text-white  added-cart'>
            <div className='mt-10'>
                <div className='my-8 text-center text-2xl font-bold text-warning'>
                    <h1>Cart Details</h1>
                </div>
                <div className='pl-4'>
                    <h4>Selected Items: <span className='font-bold text-xl text-secondary'>${cart.length}</span></h4>
                    <h4>Total Quantity: <span className='font-bold text-xl text-secondary'>${quantity}</span></h4>
                    <h4>Total Price: <span className='font-bold text-xl text-secondary'>${total}</span></h4>
                    <h4>Total Shipping Charge: <span className='font-bold text-xl text-secondary'>${shipping}</span></h4>
                    <h4>Tax: <span className='font-bold text-xl text-secondary'>${tax.toFixed(2)}</span></h4>
                </div>
                <div className='pl-4 my-5 text-xl'>
                    <h1>Grand Total: <span className='font-bold text-xl text-secondary'>${grandTotal.toFixed(2)}</span></h1>
                </div>
                <div className='flex flex-col gap-4'>
                    <button onClick={clearAll} className="btn btn-secondary text-white hover:bg-warning mx-4">
                        Clear
                        <span className='ml-2 text-white'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></span>
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
};



export default Cart;