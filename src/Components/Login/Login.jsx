import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'Login'} placeholder={'Login'} component={'input'}/>
            </div>
            <div>
                <Field name={'Password'} placeholder={'Password'}  component={'input'}/>
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
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}

export default Login;
