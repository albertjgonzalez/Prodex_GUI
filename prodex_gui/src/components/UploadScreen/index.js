import React from 'react';
import { singleBeat,beatPack } from '../Upload';
import FileUploadComponent from '../FileUploadComponent';
import './Style.css'
import LogOutButton from '../LogOutButton';

export default class UploadScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            uid:'',
            databaseRef:this.props.databaseRef
        }
    }
    sendBeatToDB(beatInfo){
        this.props.sendBeatToDB(beatInfo)
    }
    logOut(){

        this.props.logOut()
    }
    render(){
        return(
            <div logOut={this.props.logOut} style={{backgroundColor: 'steelblue', height:'100vh',marginTop:'0',paddingTop:'0'}}>
                <FileUploadComponent sendBeatToDB={(beatInfo)=>this.sendBeatToDB(beatInfo)} databaseRef={this.state.databaseRef} uid={this.state.uid} beatRef={this.props.beatRef}/>
                <LogOutButton onClick={()=>this.logOut()}/>
            </div>
        )
    }
    
}
