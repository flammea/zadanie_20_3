import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { getCountries } from './actions/actions-countries';
import { createStore } from 'redux';
import DevTools from './DevTools';

import { Router, Route, hashHistory } from 'react-router';
import Navigation from './presentational/navigation.component';




render(
    <Provider store={store}>
        <div>
        	<Router history={hashHistory}>
            <Route path='/' component={Navigation}>

            </Route>
        	</Router>
        	<DevTools/>
        </div>
    </Provider>,
    document.getElementById('root')
);


store.dispatch(getCountries());
