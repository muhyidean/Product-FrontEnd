import React from 'react';
import { useSelector } from 'react-redux';
import './UserProfile.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';

const UserProfile = (props) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // put the name of the slice


  return (
    <React.Fragment>
      <main className="profile">
        {isAuthenticated ? null : props.history.push("/login")}
        <div style={{textAlign:"center"}}>
          <h2>User Profile</h2>
        </div>

        <h4>Number of products: </h4>
        <h4>Number of shown products:</h4>
      </main>

    </React.Fragment>

  );
};

export default UserProfile;
