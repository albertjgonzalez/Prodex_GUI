import React from 'react';
import firebase from 'firebase';



export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:''
        }
    };    
    handleSubmit(event){
        event.preventDefault();
        this.props.submitUser(this.state.email,this.state.password)
    }

    render(){
        return (
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <h1>This is the Loggin Screen screen</h1>
                <label>
                    Email:
                    <input 
                        value={this.state.email} 
                        onChange={(event)=>this.setState({email: event.target.value})}
                        type="text" name="email" />
                </label>
                <label>
                    Password:
                    <input 
                        value={this.state.password} 
                        onChange={(event)=>this.setState({password: event.target.value})}
                        type="text" name="password" />
                </label>
                <input type="submit" value="Submit" />
                <button onClick={()=>this.props.createUser()}>Create Account</button>
            </form>
            
        )
    }
    
}