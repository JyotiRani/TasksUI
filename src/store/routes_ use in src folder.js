import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App.js';
import NewTask from './components/newTask.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={NewTask} />
	<Route path="/NewTask" component={NewTask}/>
  </Route>
);
