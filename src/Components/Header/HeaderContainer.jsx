import React from 'react';
import {connect} from "react-redux";
import {logOut, setUserAuthData} from "../../Redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.setUserAuthData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isAuthorized !== this.props.isAuthorized) {
            this.setState({
                isAuthorized: this.props.isAuthorized
            });
        }
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized,
        login: state.auth.login
    };
}

export default connect(mapStateToProps, {setUserAuthData, logOut})(HeaderContainer);
