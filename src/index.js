import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { getCountries } from './actions/actions-countries';
import { createStore } from 'redux';
import DevTools from './DevTools';

import { Router, hashHistory } from 'react-router';
import routes from './routes';



render(
    <Provider store={store}>
        <div>
        	<Router history={hashHistory} routes={routes}/>
        	<DevTools/>
        </div>
    </Provider>,
    document.getElementById('root')
);


store.dispatch(getCountries());
