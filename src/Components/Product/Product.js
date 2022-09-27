import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, addedProductDetails }) => {
    const { category, id, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-[550px] relative">
                <figure>{img && <img src={img} alt="Nothing Found" /> }</figure>
                <div className="card-body p-0 mt-3">
                    <div className='flex items-center justify-between px-4 mt-3'>
                        <h2 className="card-title">{name}</h2>
                        <div className="badge badge-secondary">Price:<span className='font-bold'> ${price}</span></div>
                    </div>
                    <div className="card-actions justify-center">
                        <div className="badge badge-outline">Ratings{ratings}</div>
                        <div className="badge badge-outline">{seller}</div>
                        <div className="badge badge-outline">{category}</div>
                    </div>
                </div>
                <div className='w-full h-14 bg-orange-600 hover:bg-orange-800 text-center absolute bottom-0 flex items-center justify-center'>
                    <button onClick={()=> addedProductDetails(product)} className='text-2xl font-bold text-yellow-100'>
                        Add to Cart
                        <span className='text-white ml-2'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;