import React from 'react';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        };
        verifyUser(){
            console.log(this.props)
        }

    render(){
        return (
            <div>
                <h1>This is the login screen</h1>
                <button onClick={()=>this.props.createUser()}>Create Account</button>
                <button onClick={()=>this.verifyUser('email','password')}>Login</button>
            </div>
        )
    }
    
}