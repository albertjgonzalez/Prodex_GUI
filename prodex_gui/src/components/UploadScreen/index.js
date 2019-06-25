import React from 'react';
import { singleBeat,beatPack } from '../Upload';
import FileUploader from './../FIleUploader';

export default class UploadScreen extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        return(
            <div id={UploadScreen}>
                <h1>This is the upload screen</h1>
                <FileUploader 
                    userName={this.props.userName}
                    packName={this.props.packName}
                    />
                <button onClick={()=>singleBeat('beat')}>Upload</button>
                <button onClick={()=>this.props.logOut()}>logout</button>
            </div>
        )
    }
    
}
