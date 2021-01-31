import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserAuthData} from "../../Redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then(response => {
            if (!response.data.resultCode) {
                let {id, login, email} = response.data.data;
                this.props.setUserAuthData(id, email, login);
            }
        })
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
