import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ReviewOrders = ({ product, removeAddedItems }) => {
    const { img, name, price, quantity, _id } = product;
    return (
        <div className='flex items-center w-full justify-between border border-l-slate-300 p-2 rounded my-10'>
            <div className='flex'>
                <div>
                    <img className='w-[67px]' src={img} alt="img" />
                </div>
                <div className='ml-14'>
                    <p className='m-0'>{name}</p>
                    <p className='m-0'><small>Price: ${price}</small></p>
                    <p className='m-0'><small>Quantity: {quantity}</small></p>
                </div>
            </div>
            <div className='mr-16'>
                <button onClick={() => removeAddedItems(_id)} className='bg-slate-500 w-14 h-14 rounded-full hover:bg-slate-800'>
                    <FontAwesomeIcon className='text-warning' icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default ReviewOrders;