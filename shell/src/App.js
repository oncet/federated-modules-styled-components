import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';

const Foo = React.lazy(() => import('foo/Foo'));

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/foo">
        <Suspense fallback={'Loading...'}>
          <Foo />
        </Suspense>
      </Route>
      <Route path="/">
        <h1>Welcome to the Homepage</h1>
      </Route>
    </Switch>
  </Router>
);

export default App;
