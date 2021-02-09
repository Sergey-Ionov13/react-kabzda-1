import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setUserProfile(this.props.match.params.userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);
