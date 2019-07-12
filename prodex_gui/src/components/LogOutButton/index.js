import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';

export default class LogOutButton extends Component{
    render(){
        return(
            <Button 
                style={{
                    position:'absolute',
                    top:'0'
                }}
                onClick={this.props.onClick}>
                sign out
            </Button>
        )
    }
}