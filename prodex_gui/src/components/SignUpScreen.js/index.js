import React from 'react';

export default class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
        };

  
    render(){
        return (
            <div>
                <h1>This is the SignUp screen</h1>
                <button onClick={()=>this.props.createUser()}>SignUp</button>
            </div>
        )
    }
    
}