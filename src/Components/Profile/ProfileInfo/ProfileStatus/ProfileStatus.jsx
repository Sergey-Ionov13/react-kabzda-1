import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
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
        if (this.state.editMode) {
            this.props.updateStatus(this.state.status);
        }
    }

    onChangeStatus = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    render() {
        return (
            <div>{
                this.state.editMode
                    ? <div>
                        <input onChange={this.onChangeStatus} onBlur={this.editModeToggle} autoFocus={true} value={this.state.status}/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.editModeToggle}>{this.props.status || '---'}</span>
                    </div>
            }</div>
        )
    }
}

export default ProfileStatus;
