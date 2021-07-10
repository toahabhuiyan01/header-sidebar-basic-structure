import React, {Suspense} from 'react';
import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from '../routes';


function Content() {
    return (
        // <Router>
            <Suspense fallback={"Loading..."}>
                <Switch>
                    {
                        routes.map((route, idx) => 
                            <Route 
                                id={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                component={route.component}
                            />
                        )
                    }
                    <Redirect from="/" to="/home" />
                </Switch>
            </Suspense>
        // </Router>
    )
}

export default Content;
