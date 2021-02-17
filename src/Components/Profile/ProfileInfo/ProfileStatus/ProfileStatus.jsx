import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    /*              !!!!!!!!!!!!!!!   Realization with two methods   !!!!!!!!!!!!!!!

    //add this.disableEditMode to onBlur input attribute
    enableEditMode = () => {
        this.setState({editMode: true});
    }
    //add this.enableEditMode to onDoubleClick span attribute
    disableEditMode = () => {
        this.setState({editMode: false});
    }
    */
    editModeToggle = () => {
        this.setState({editMode: !this.state.editMode});
    }

    render() {
        return (
            <div>{
                this.state.editMode
                    ? <div>
                        <input onBlur={this.editModeToggle} autoFocus={true} value={this.props.status}/>
                    </div>
                    : <div>
                <span onDoubleClick={this.editModeToggle}>{this.props.status}</span>
                </div>
            }</div>
        )
    }
}

export default ProfileStatus;
