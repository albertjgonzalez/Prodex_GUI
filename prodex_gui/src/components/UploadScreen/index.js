import React from 'react';
import { singleBeat,beatPack } from '../Upload';
import FileUploadComponent from '../FileUploadComponent';
import logOutButton from '../LogOutButton';
import './Style.css'
import LogOutButton from '../LogOutButton';

export default class UploadScreen extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        return(
            <div style={{backgroundColor: 'steelblue', height:'100vh',marginTop:'0',paddingTop:'0'}}id={UploadScreen}>
                <FileUploadComponent userName={this.props.userName} beatRef={this.props.beatRef}/>
                {/* <button onClick={()=>this.props.logOut()}>logout</button> */}
                <LogOutButton />
            </div>
        )
    }
    
}
