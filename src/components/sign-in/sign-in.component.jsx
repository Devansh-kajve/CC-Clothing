import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../button/button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event =>{
        const {value, name} = event.target;

        this.setState({ [name]: value})
    }
 
handleSubmit = event => {
    event.preventDefault();

    this.setstate({ email: '', password: ''})
}

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" value={this.state.email} handleChange={this.handleChange} label='email' required />
                    <FormInput name="password" type='password' handleChange={this.handleChange} value={this.state.password} label='password' />
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;