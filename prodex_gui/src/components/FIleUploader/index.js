import React from 'react';
import './../Upload'
import FileUpload from "react-firebase-file-uploader";
import firebase from 'firebase';
import UploadModal from '../UploadModal';


export default class FileUploader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
          files: [],
          isUploading: false,
          progress: 0,
          modalOpen:false,
          uploadReady:false,
          beatName:'',
          beatPackName:'',
          storageRef:'firebase.storage().ref(`${this.props.userName}/${this.state.beatPackName}`)'
        };
    const fileToUpload = [];
  }

    
  customOnChangeHandler = (event) => {
    const files = event.target.files[0]
    const filesToStore = [];
    filesToStore.push(files)
    this.setState({ files: filesToStore });
    this.setState({modalOpen:true})
  }
 
  updateBeatData = (beatInfo) => {
    let { beatName } = beatInfo;
    let { beatPackName } = beatInfo;
    this.setState({ beatName,beatPackName })
    console.log(this.state.beatName)
  }
  
  closeModal = () =>{
    this.setState({modalOpen:false})
    this.setState({uploadReady:true})
    this.startUploadManually(this.state.files)
  }
  startUploadManually = (beat) => {
    this.setState({ isUploading: true, progress: 0 })
    this.fileUploader.startUpload(beat[0])

  }

    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
      this.setState({ isUploading: false });
      console.error(error);
    };
    handleUploadSuccess = () => {
      this.setState({ progress: 100, isUploading: false });
      firebase
        .storage()
        .ref()
        .child(this.state.beatName)
    };
    
    render() {
      
      return (
        <div>
          <UploadModal 
            closeModal={this.closeModal}
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
              filename={this.state.beatName}
              storageRef={firebase.storage().ref(`${this.props.userName}/${this.state.beatPackName}`)}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
          </form>
        </div>
      )
  }
}