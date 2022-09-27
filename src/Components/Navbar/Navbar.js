import React from 'react';
import logo from '../../images/Logo.svg';

const Navbar = () => {
    return (
        <div className='px-10 shadow-lg'>
            <div className="navbar bg-base-100">
            <div className="flex-1">
              <img src={logo} alt="" />
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal p-0">
                <li><a>Order</a></li>
                <li><a>Order Review</a></li>
                <li><a>Manage Inventory</a></li>
                <li><a>Log In</a></li>
              </ul>
            </div>
          </div>
        </div>
    );
};

export default Navbar;