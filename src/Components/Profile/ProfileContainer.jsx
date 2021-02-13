import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {Redirect} from "react-router";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setUserProfile(this.props.match.params.userId);
    }

    render() {
        if (!this.props.isAuthorized) return <Redirect to={'/Login'} />
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {setUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
