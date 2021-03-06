import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} placeholder={'email'} component={'input'}/>
            </div>
            <div>
                <Field name={'password'} placeholder={'Password'}  component={'input'}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={'input'}/> Remember Me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}

let mapStateToProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password,
    rememberMe: state.auth.rememberMe
})

export default connect(mapStateToProps, {login})(Login);
