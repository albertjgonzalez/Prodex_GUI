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
          modalOpen:false,
          beatName:'',
          beatPackName:''
        };
  }
  
    
    
    
  customOnChangeHandler = (event) => {
    this.setState({modalOpen:true})
    // this.startUploadManually(event)
  }
 
  updateBeatData = (beatInfo) => {
    let { beatName,beatPackName } = beatInfo;
    this.setState({ beatName,beatPackName })
    console.log(this.state.beatName)
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
          <UploadModal 
            updateBeatInfo={this.updateBeatData}
            modalOpen={this.state.modalOpen}
            beatName={this.props.beatName}
            beatPackName={this.props.beatPackName}
            />
          <form>
            {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
            <FileUpload
              accept="mp3/*"
              onChange={this.customOnChangeHandler}
              ref={instance => { this.fileUploader = instance; } }
              filename={this.state.beatName }
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