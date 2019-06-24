import React from 'react';
import { singleBeat,beatPack } from '../Upload';

export default class UploadScreen extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        return(
            <div id={UploadScreen}>
                <h1>This is the upload screen</h1>
                <button onClick={()=>singleBeat('beat')}>Upload</button>
                <button onClick={()=>this.props.logOut()}>logout</button>
            </div>
        )
    }
    
}
