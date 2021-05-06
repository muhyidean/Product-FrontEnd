import React from 'react';
import './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/index';
import { Link, Redirect} from 'react-router-dom';
import 'react-router';

const Header = (props) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // put the name of the slice
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    <Redirect to='/login'/>;
  }

  return (
    <header className="header">
      <h1>Redux Auth</h1>
      {isAuthenticated && (<nav>
        <ul>
          <li>
            <Link to="/">My Products</Link>
          </li>
          <li>
            <Link to="/"> My Sales</Link>
          </li>
          <li>
            <Link to="/counter"> Counter </Link>
          </li>
          <li>
            <Link to="/user"> Profile </Link>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>)}

    </header>
  );
};

export default Header;
