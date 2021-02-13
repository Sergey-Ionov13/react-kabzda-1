import {addMessageActionCreator, printTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        printText: (text) => {
            dispatch(printTextActionCreator(text));
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
