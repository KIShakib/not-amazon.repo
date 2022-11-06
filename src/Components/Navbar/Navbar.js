import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import logo from '../../images/Logo.svg';

const Navbar = () => {
  const { userLogOut, user } = useContext(AuthContext);
  const handleSignOut = () => {

    userLogOut()
      .then(() => {
        console.log("sign out success");
      })
      .catch(err => {
        console.error(err);
      })
  }
  return (
    <div className='px-10 shadow-lg'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/"><img src={logo} alt="ema-jon" /></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/orders">Orders</NavLink></li>
            <li><NavLink to="/inventory">Inventory</NavLink></li>
            {user?.uid ?
              <>
                <li><button onClick={handleSignOut}>Sign Out</button></li>
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <NavLink to="/user">
                    <div className="indicator">
                      <img className='bg-[#D926A9] rounded-full p-1 w-12' src={user?.photoURL} alt="User" />
                    </div>
                  </NavLink>
                </label>

              </>
              :
              <>
                <li><NavLink to="/login">Log In</NavLink></li>
                <li><NavLink to="/signup">Sign Up</NavLink></li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;