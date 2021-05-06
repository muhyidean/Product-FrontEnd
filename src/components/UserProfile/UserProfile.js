import React from 'react';
import {useSelector} from 'react-redux';
import './UserProfile.module.css';

const UserProfile = (props) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // put the name of the slice
  
  const counter = useSelector(state => state.counter.counter); // this will make a subscription

  return (
    <main className="profile">
      {isAuthenticated? null : props.history.push("/login")}
      <h2>My User Profile</h2>
      <p>your current count is: {counter}</p>
    </main>
  );
};

export default UserProfile;
