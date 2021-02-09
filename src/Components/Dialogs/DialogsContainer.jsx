import {addMessageActionCreator, printTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuthorized: state.auth.isAuthorized
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

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
