import React from 'react';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        };

  
    render(){
        return (
            <div>
                <h1>This is the login screen</h1>
                <button onClick={()=>this.props.createUser()}>Create Account</button>
                <button onClick={()=>this.props.verifyUser()}>Login</button>
            </div>
        )
    }
    
}