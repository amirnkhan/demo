import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./style.css";
import { SportsRugbySharp } from "@material-ui/icons";
import FaceIcon from '@material-ui/icons/Face';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PhoneIcon from '@material-ui/icons/Phone';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from "./SignUp/SignUp";

const useStyles = makeStyles((theme) => ({
  root: {
    
    margin: '0 auto',
    width: '50%',
    borderRadius: '10px',
    padding:"20px",
    backgroundColor: 'rgba(250, 250, 250, .5)',
    backgroundPosition: "center",
    backgroundPize: "cover",

  },
}));

export default function Login() {
  const classes = useStyles();
  const[openLogin, setOpenLogin] = useState(false);
  const openLoginHandle = () => {
      setOpenLogin(true);
  }
  const openSignUpHandle = () => {
        setOpenLogin(false);
    }
  
  return (
    <div style={{backgroundImage:`url(${"https://images.freecreatives.com/wp-content/uploads/2015/03/Huge-Backgrounds-25.jpg"})`, height:"100vh"}}>
   
        <div className="login">
        <Login />
       {/*  <Card className={classes.root}>
        <Typography variant="h3">Login</Typography>
            <Grid container spacing={1}>
              <Grid item>
                <AccountCircle />

                <TextField id="input-with-icon-grid" label="E-mail" />
              </Grid>
              <Grid item>
                <AccountCircle />
                <TextField id="input-with-icon-grid" label="Password" />
              </Grid>
            </Grid>
          <CardActions>
            
            <Link to="/form"><Button size="small" color="success" variant="outlined">
              Login
            </Button>
            </Link>
          </CardActions>
          <div>New User ? click <div onClick={openSignUpHandle} style={{cursor: 'pointer', color: 'blue', display: 'inline-flex', fontWeight: 'bold'}}>here</div> to signup</div>
        </Card> */}
      </div> 
      <div className="registration">
       {/*  <Card className={classes.root}>
            <Typography variant="h3">Registration</Typography>
            <Grid container spacing={1}>
              <Grid item>
                <FaceIcon />
                <TextField id="input-with-icon-grid" label="Name" />
              </Grid>
              <Grid item>
                <AccountCircle />
                <TextField id="input-with-icon-grid" label="E-mail" />
              </Grid>
              <Grid item>
                <PhoneIcon />
                <TextField id="input-with-icon-grid" label="Phone Number" />
              </Grid>
              <Grid item>
                <VisibilityIcon />
                <TextField id="input-with-icon-grid" label="Password" />
              </Grid>
            </Grid>
          <CardActions>
            <Button size="small" color="primary">
              Submit
            </Button>
          </CardActions>
          <div>Already Registered ? click <div onClick={openLoginHandle} style={{cursor: 'pointer', color: 'blue', display: 'inline-flex', fontWeight: 'bold'}}>here</div> to login</div>
        </Card>
 */}
 
      </div>
       
     
      
    </div>
  );
}
