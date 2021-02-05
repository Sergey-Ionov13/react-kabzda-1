import React from 'react';
import {connect} from "react-redux";
import {setUserAuthData} from "../../Redux/auth-reducer";
import Header from "./Header";
import {getAuthorizationStatus} from "../../api/api";

class HeaderContainer extends React.Component{

    componentDidMount() {
        getAuthorizationStatus().then(data => {
            if (!data.resultCode) {
                let {id, login, email} = data.data;
                this.props.setUserAuthData(id, email, login);
            }
        });
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

export default connect(mapStateToProps, {setUserAuthData})(HeaderContainer);
