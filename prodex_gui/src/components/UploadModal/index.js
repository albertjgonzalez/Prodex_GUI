import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function UploadModal(props) {
  let beatInfo ={
    beatName: '',
    beatPackName: ''
  }
 
  const [open, setOpen] = React.useState(true);

  function updateBeatName(e){
     beatInfo.beatName=e.target.value

  }

  function updateBeatPackName(e){
    beatInfo.beatPackName=e.target.value
 }

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  if(props.modalOpen){

  
    return (
      <div 
        onChange={()=>props.updateBeatInfo(beatInfo)}
        beatName={beatInfo.beatName}
        beatPackName={beatInfo.beatPackName}>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Name beat and pack location
            </DialogContentText>
            <TextField
              onChange={(event)=>updateBeatName(event)}
              autoFocus
              margin="dense"
              id="beatName"
              label="beat name"
              type="name"
              fullWidth
            />
            <TextField
              onChange={(event)=>updateBeatPackName(event)}
              autoFocus
              margin="dense"
              id="beatPackName"
              label="beat pack name"
              type="name"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
    }
    else{
      return(
        <div></div>
      )
    }
}