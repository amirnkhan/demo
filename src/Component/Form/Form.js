import React from 'react';
import './style.css';
const Form = props => {
    return (
        <div className="formbody">
        <div className="center">
            <button input type="button">SELL</button>
            <button input type="button">BUY</button>
            </div>
            
<div className="box">
            <form>
  <div style={{padding:"10px"}}>
  <label> Company Name:</label>
    <input type="text" className="form-input"/>
    </div>
    <div style={{padding:"10px"}}>
    <label>Min Amount:</label> 
    <input type="text" className="form-input"/>
    </div>
    <div style={{padding:"10px"}}>
   <label> Offer Amount:</label>
    <input type="text" className="form-input"/>
    </div>
    <div style={{padding:"10px"}}>
   <label>  Expiry Date:</label>  
     <input type="text" className="form-input"/>
    </div>
    <div style={{padding:"10px"}}>
  <label>  Type Coupen Code:</label>
    <input type="text" className="form-input"/>
    </div>
  
</form>
</div>
            </div>

    )
}


export default Form

// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// export default function BasicTextFields() {
//   const classes = useStyles();
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;
//   return (
      
//     <form className={classes.root} noValidate autoComplete="off">
//     <Card className={classes.root}>
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//              <button input type="button">SELL</button>
//              <button input type="button">BUY</button>
                     

//       <TextField id="standard-basic" label="Company Name" />
//       <TextField id="standard-basic" label="Min Amount" />
//       <TextField id="standard-basic" label="Offer Amount" />
//       <TextField id="standard-basic" label="Expiry Date" />
//       <TextField id="standard-basic" label="Type Coupen Code" />
      
//       {/* <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
//     </form>
//   );
// }
