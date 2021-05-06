import React, { Fragment } from 'react'
import Counter from '../../components/Counter/Counter';
import Header from '../../components/Header/Header';
import Auth from '../../components/Auth/Auth';
import UserProfile from '../../components/UserProfile/UserProfile';

import { Redirect, Route, Switch } from 'react-router';

const AuthBlock = () => {

    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path='/login' component={Auth} />
                <Route path='/user' component={UserProfile} />
                <Route path='/counter' component={Counter} />
                <Redirect from="/" to='login' />
            </Switch>
            {/* <Counter /> */}
        </Fragment>
    );
}

export default AuthBlock;