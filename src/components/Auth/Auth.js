import React from 'react';
import './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/index';

const Auth = (props) => {
  
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.login());
    props.history.push("/user");
  }

  return (
    <main className="auth">
      <section>
        <form onSubmit={loginHandler}>
          <div >
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div >
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
