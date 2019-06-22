import React from 'react';
import firebase from 'firebase';


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