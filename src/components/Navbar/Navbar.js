import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = (props) => {








  return (
    <div>
      <nav className={props.divName}>
        <span className='web-title'> GameSphere</span>
        <span className='title-punchline'> Where pixels meet playfulness!</span>
        <ul>
          <li> <Link className={props.divLi} to='/'> Home </Link> </li>
          <li> <Link className={props.divLi} to='/services'>Services</Link> </li>
          <li> <Link className={props.divLi} to='/blogs'>Blogs </Link> </li>
          <li> <Link className={props.divLi} to='/gallery'>Gallery</Link> </li>
        </ul>





        <div className='navbar-search'>

          <form method='post'>
            <input placeholder='search' required />
            <button type='submit'> Search </button>
          </form>




        </div>
        <div className='right-navbar'>

          <button onClick={props.function} className='btn-dark-mode'>

            {props.buttonName}

          </button>



        </div>


      </nav>
    </div>
  );
}

export default Navbar;
