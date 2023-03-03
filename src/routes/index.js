import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Breadcrumbs from '../Components/BreadCrumbs/Breadcrumbs';
import Paths from './routs';
import PageNotFound from '../Components/PageNotFound/index';

const AppRouter = () => (
  <Router>
    <div className="main-wrapper">
      <Switch>
        {Paths.map(({ path, Component }, key) => (
          <Route
            exact
            path={path}
            key={key}
            render={props => 
              {
              const crumbs = Paths
                // Get all routes that contain the current one.
                .filter(({ path }) => props.match.path.includes(path))
                // Swap out any dynamic routes with their param values.
                .map(({ path, ...rest }) => ({
                  path: Object.keys(props.match.params).length
                    ? Object.keys(props.match.params).reduce(
                        (path, param) =>
                          path.replace(`:${param}`, props.match.params[param]),
                        path
                      )
                    : path,
                  ...rest
                }));

              return (
                <div className="main">
                  <Breadcrumbs crumbs={crumbs} />
                  <Component {...props} />
                </div>
              );
            }}
          />
        ))}
        <Route path='*' component={PageNotFound}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
