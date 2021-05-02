import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import {Link} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 320,
  },
  buttonn: {
     background: 'linear-gradient(  #18283B, #00d09c )',
    //background: "#00d09c",
    borderRadius: 3,
    border: 0,
    color: "white",
    margin: 10,
    width: 250,
    padding: "8px 30px",
     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  textfield: {
    marginBottom: 20,
  },
}));

export default function PopupBox({ open, setOpen }) {
  const classes = useStyles();
  const [age, setAge] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={open}
      onClose={handleClose}
    >
    {age?
        <div>
      <div style={{flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
        <DialogTitle>Sign In Here</DialogTitle>
        <DialogTitle onClick={handleClose}>
          <CloseIcon />
        </DialogTitle>
      </div>
      <DialogContent>
        <form className={classes.container}>
         
          <TextField
            required
            id="standard-disabled"
            label="Email"
            
            fullWidth
            className={classes.textfield}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            fullWidth
            autoComplete="current-password"
            className={classes.textfield}
          />
          
        </form>
      </DialogContent>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
      <Button color="primary" variant="outlined" className={classes.buttonn}>
        Sign In
      </Button>
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
      <p className="para"> Forgot password?</p>
      <Link>
      <p className="para" onClick={()=>setAge(false)}>Don't have account? Sign Up</p>
      </Link>
    
      </div>
      </div>
      
    :
    <div>
      <div style={{flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
        <DialogTitle>Sign Up Here</DialogTitle>
        <DialogTitle onClick={handleClose}>
          <CloseIcon />
        </DialogTitle>
      </div>
      <DialogContent>
        <form className={classes.container}>
         
          <TextField
            required
            id="standard-disabled"
            label="Name"
            fullWidth
            className={classes.textfield}
          />
           <TextField
            required
            id="standard-disabled"
            label="Mobile Number"
            fullWidth
            className={classes.textfield}
          />
           <TextField
            required
            id="standard-disabled"
            label="Email"
            fullWidth
            className={classes.textfield}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            fullWidth
            autoComplete="current-password"
            className={classes.textfield}
          />
          
        </form>
      </DialogContent>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
      <Button color="primary" variant="outlined" className={classes.buttonn}>
        Sign Up
      </Button>
      </div>
      </div>
    }
    </Dialog>
  );
}

