import React from 'react';
import firebase from 'firebase';
import './style.css';



export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
            CRHover:'createUserText'
        }
        this.styles={
            label: {
                fontSize:'26px',
                marginBottom:'30%'
            },
            form:{
                textAlign:'center',
            },
            textLink:{
                color: this.state.CRHover
            },
            input:{
                borderRadius:'5%',
                borderWidth: '0'
            }
        }
    };    
   
    handleSubmit(event){
        event.preventDefault();
        this.props.submitUser(this.state.email,this.state.password)
    }

    render(){
        return (
            <form style={this.styles.form} onSubmit={(event)=>this.handleSubmit(event)}>
                <h1>Log In</h1>
                <label >
                    <text style={this.styles.label}>
                    Email
                    </text>
                    <br />
                    <input 
                        style={this.styles.input}
                        value={this.state.email} 
                        onChange={(event)=>this.setState({email: event.target.value})}
                        type="text" name="email" />
                </label>
                <br />
                <label>
                    <text style={this.styles.label}>
                    Password
                    </text>
                    <br />
                    <input 
                        style={this.styles.input}
                        value={this.state.password} 
                        onChange={(event)=>this.setState({password: event.target.value})}
                        type="text" name="password" />
                </label>
                <br />
                <input type="submit" value="Submit" />
                <br />
                <div 
                    className={this.state.CRHover} 
                    onMouseEnter={()=>this.setState({CRHover:'createUserTextHover'})}
                    onMouseLeave={()=>this.setState({CRHover:'createUserText'})}>
                <p onClick={()=>this.props.createUser(true)}>
                    Create Account
                </p>
                </div>
            </form>
            
        )
    }
    
}
