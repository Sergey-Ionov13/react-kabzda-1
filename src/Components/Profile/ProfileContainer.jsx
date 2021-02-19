import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatus, setUserProfile, updateStatus} from "../../Redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 14557;
        this.props.setUserProfile(userId);
        this.props.getStatus(userId)

    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {setUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);
