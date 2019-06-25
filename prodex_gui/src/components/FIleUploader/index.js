import React from 'react';
import './../Upload'
import FileUpload from "react-firebase-file-uploader";
import firebase from 'firebase';
import UploadModal from '../UploadModal';


export default class FileUploader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
          file: [],
          isUploading: false,
          progress: 0,
          fileName:'beat name'
        };
  }
  
    
    
    
  customOnChangeHandler = (event) => {
    this.startUploadManually(event)
  }
 
  
  startUploadManually = (e) => {
    this.setState({ isUploading: true, progress: 0 })
    this.fileUploader.startUpload(e.target.files[0])

  }

    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
      this.setState({ isUploading: false });
      console.error(error);
    };
    handleUploadSuccess = () => {
      alert(this.props.fileName)
      this.setState({ progress: 100, isUploading: false });
      firebase
        .storage()
        .ref()
        .child()
    };
    
    render() {
      
      return (
        <div>
          <UploadModal />
          <form>
            {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
            <FileUpload
              accept="mp3/*"
              onChange={this.customOnChangeHandler}
              ref={instance => { this.fileUploader = instance; } }
              filename={this.state.fileName }
              storageRef={firebase.storage().ref(`${this.props.userName}/${this.props.packName}`)}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
          </form>
        </div>
      )
  }
}