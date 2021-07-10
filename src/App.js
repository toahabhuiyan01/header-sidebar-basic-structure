import React, {Suspense} from 'react';
import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from './root/components/Layout';

function App() {
  return (
    <Router>
      <Suspense fallback={"Loading..."}>
        <Switch>
            <Layout />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
