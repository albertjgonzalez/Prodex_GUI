import React from 'react';
import { singleBeat,beatPack } from '../Upload';

const UploadScreen = () => {
    return(
        <div id={UploadScreen}>
            <h1>This is the upload screen</h1>
            <button onClick={()=>singleBeat('beat')}>Upload</button>
        </div>
    )
}

export default UploadScreen