import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized
    }
}

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuthorized) return <Redirect to={'/login'} />
            return <Component {...this.props}/>
        }
    }


    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}

export default withAuthRedirect;
