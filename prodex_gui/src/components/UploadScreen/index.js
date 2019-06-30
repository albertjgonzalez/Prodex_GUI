import React from 'react';
import { singleBeat,beatPack } from '../Upload';
import FileUploader from './../FIleUploader';
import './Style.css'

export default class UploadScreen extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        return(
            <div style={{backgroundColor: 'steelblue', height:'100vh',marginTop:'0',paddingTop:'0'}}id={UploadScreen}>
                <FileUploader userName={this.props.userName} beatRef={this.props.beatRef}/>
                {/* <button onClick={()=>this.props.logOut()}>logout</button> */}
            </div>
        )
    }
    
}
