import React from 'react';

export default class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            email:'',
            password:''
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
        
    };   
    };    
    handleSubmit(event){
        event.preventDefault();
        this.props.createUser(this.state.name,this.state.email,this.state.password)
    }

    render(){
        return (
            <form style={this.styles.form}onSubmit={(event)=>this.handleSubmit(event)}>
                <h1>Create Account</h1>
                <label>
                <text style={this.styles.label}>
                    Name
                    </text>
                    <br />
                    <input 
                        value={this.state.name} 
                        onChange={(event)=>this.setState({name: event.target.value})}
                        type="text" name="name" />
                </label>
                <br />
                <label>
                <text style={this.styles.label}>
                    Email
                    </text>
                    <br />
                    <input 
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
                        value={this.state.password} 
                        onChange={(event)=>this.setState({password: event.target.value})}
                        type="text" name="password" />
                </label>
                <br />
                <input type="submit" value="Submit" />
                
            </form>
        )
    }
    
}