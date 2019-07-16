import React from 'react';
import '../Upload'
import FileUploader from "react-firebase-file-uploader";
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import firebase from 'firebase';
import UploadModal from '../UploadModal';
import './style.css';
import plusSign from './../../images/plusSign.png'
import FBDatabase from '../FBDatabase'

export default class FileUploadComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid:this.props.uid,
      files: [],
      isUploading: false,
      progress: 0,
      modalOpen: false,
      uploadReady: false,
      beatName: '',
      beatPackName: '',
      storageRef: this.props.databaseRef
    };
    const fileToUpload = [];
  }
  
  
  customOnChangeHandler = (event) => {
    const files = event.target.files[0]
    const filesToStore = [];
    filesToStore.push(files)
    this.setState({ files: filesToStore });
    this.setState({ modalOpen: true })
  }
  
  updateBeatData = (beatName,beatPackName) => {
    beatName ? this.setState({ beatName }) : this.setState({ beatPackName })
  }
  
  closeModal = () => {
    this.setState({ modalOpen: false })
    this.setState({ uploadReady: true })
    this.startUploadManually(this.state.files)
  }
  startUploadManually = (beat) => {
    this.setState({ isUploading: true, progress: 0 })
     this.fileUploader.startUpload(beat[0])
    
  }
  
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    this.setState({ uploadReady: false })
    console.error(error);
  };
  handleUploadSuccess = () => {
    this.setState({ progress: 100, isUploading: false });
    firebase
    .storage()
    .ref()
    .child(this.state.beatName)
    // let beatInfo=[this.state.beatName,this.state.beatPackName]
    //      alert('yurrrr')
    //      this.props.sendBeatToDB(beatInfo)
    let beatInfo=[this.state.beatName,this.state.beatPackName]
    this.props.sendBeatToDB(beatInfo)
  };
  render() {
    return (
      <form 
      style={{ height: '100%', marginTop: '0', paddingTop: '0' }}
      >
        {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
        <label>
          <div id={'ButtonContainter'} style={{ width: '100%', height: '100vh', display: 'flex' }}>
            <div id={'uploadButton'} style={{ margin: 'auto', display: 'block', justifyItems: 'center' }}>
              <FileUploader
                hidden
                accept="mp3/*"
                onChange={this.customOnChangeHandler}
                ref={instance => { this.fileUploader = instance; }}
                filename={this.state.beatName}
                storageRef={firebase.storage().ref(`${this.props.userName}/${this.state.beatPackName}`)}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
                style={{ height: '100%', width: '100%' }}
              />
              <text>Add Beat</text><br />
              <img src={plusSign} style={{ height: `50px`, width: '50px', marginLeft:'10%' }} />
            </div>
          </div>
        </label>
        <UploadModal
          closeModal={this.closeModal}
          updateBeatInfo={this.updateBeatData}
          modalOpen={this.state.modalOpen}
          beatName={this.props.beatName}
          beatPackName={this.props.beatPackName}
        />
      </form>


    )
  }
}