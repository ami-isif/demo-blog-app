import React, { useState } from 'react';
import { NavLink,} from 'react-router-dom';
import { user, logout } from '../controllers/user_controller';

function NavBar() {

  const[, setLoggedIn] = useState(user.loggedIn);

  function handleLogout(e) {
    e.preventDefault();
    logout();
    setLoggedIn(user.loggedIn);
}

     return (
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
         <a className="navbar-brand" href="/">Ammy</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav">
          <li className="nav-item">
             <NavLink className="nav-link" to="/" >Home</NavLink>
         </li>

         {! user.loggedIn &&
            <li className="nav-item">
               <NavLink className="nav-link" to="/login" >Login</NavLink>
            </li>
       }

          {  user.loggedIn &&
           <>
            <li className="nav-item">
              <NavLink className="nav-link" to="/new-post" >New Post </NavLink>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="/" onClick={handleLogout} >Logout</a> 
            </li>
           </>
         }

          </ul>
         </div>
        </div>
      </nav>
    );
  }

export default NavBar;