import React from 'react';
import { singleBeat,beatPack } from '../Upload';
import FileUploadComponent from '../FileUploadComponent';
import './Style.css'
import LogOutButton from '../LogOutButton';

export default class UploadScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            databaseRef:this.props.databaseRef
        }
    }
    logOut(){

        this.props.logOut()
    }
    render(){

        return(
            <div logOut={this.props.logOut} style={{backgroundColor: 'steelblue', height:'100vh',marginTop:'0',paddingTop:'0'}}>
                <FileUploadComponent databaseRef={this.state.databaseRef}userName={this.props.userName} beatRef={this.props.beatRef}/>
                <LogOutButton onClick={()=>this.logOut()}/>
            </div>
        )
    }
    
}
