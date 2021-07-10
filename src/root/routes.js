import React from 'react';

const Home = React.lazy(() => import("./components/Home"));
const Feed = React.lazy(() => import('./components/Feed'));

const routes = [
    { path: '/home', exact: true, name: "Home", auth: true, component: Home},
    { path: '/feed', exact: true, name: "Feed", auth: true, component: Feed},
];

export default routes;