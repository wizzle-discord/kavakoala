import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { Home, Checkout } from './views';
import React from 'react';
import { connect } from 'react-redux';

const PrivateRoute: React.FC<{
  component: React.FC
  path: string|string[]
  exact?: boolean
}> = (props) => {
  // If not logged in, redirect. Logic not built yet
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return <Redirect to='/login' />
  }
  return <Route path={props.path} exact={props.exact} component={props.component} />;
};

interface RouterProps {
  history: any
  dispatch: any
  user: any
}

class RouterComponent extends React.Component<RouterProps> {
  render() {
    return (
      <Router history={ this.props.history }>
        <Switch>
          <PrivateRoute exact path={ '/'} component={ () => <Home /> } />
          <Route path={ '/checkout'} component={ () => <Checkout /> } />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state: RouterProps) => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps)(RouterComponent);
