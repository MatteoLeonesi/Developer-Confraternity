import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// if user is not authenticated and not loaded we redirect him to login, otherwise we display the selected routes
const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest //all the other props passed to this component, we used rest to avoid naming issue with the props passed to Route
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !loading ? (
        <Redirect to="/login" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
