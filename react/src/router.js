import React from 'react';
import { Route } from 'react-router-dom'
import App from './components/App';
import Main from './screens/Main';

export default (
	<App>
		<Route path="/" exact component={Main} />
	</App>
);