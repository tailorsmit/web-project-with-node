import React,{Component} from 'react';
import GoogleLogin from 'react-google-login';
import {Redirect} from 'react-router-dom';
import Appbar from './Appbar'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class Welcome extends Component {
  constructor(props) {
    super(props);
       this.state = {
       loginError: false,
       redirect: false,
       customerType:''
       }}
  
    signup(res){
        let postdata;
        if(res){
        postdata ={
            firstname: res.profileObj.givenName,
            lastname: res.profileObj.familyName,
            email:res.profileObj.email          
        }
        
    }
    

if(postdata){
    sessionStorage.setItem("userdata",JSON.stringify(postdata));
    sessionStorage.setItem("type",this.state.customerType);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://ec2-13-232-150-155.ap-south-1.compute.amazonaws.com:9000/";
    fetch(proxyurl+url+this.state.customerType+"/login",{
    method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, /',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(postdata) 
    }).then(res=>res.json())
      .then(res => {
        console.log(res)
        this.setState({redirect:true})
      });
//updating gui
    
}
}
  

handleChange=(event)=>{
  this.setState({customerType:event.target.value});
}
  render(){

    if (this.state.redirect || sessionStorage.getItem('userdata')) {
      return (<Redirect to={'/home'}/>)
  }

    const responseGoogle = (response) => {
      console.log("google console");
      console.log(response);
      this.signup(response)
  }
  
  return (
    <div>

<Appbar />

<FormControl component="fieldset">
          <FormLabel component="legend">Customer Wants to Log in</FormLabel>
          <RadioGroup
            aria-label="Customer Wants to Log in as"
            value={this.state.value}
            onChange={(event)=>this.handleChange(event)}>

            <FormControlLabel value="buyers" control={<Radio />} label="Buyer" />
            <FormControlLabel value="sellers" control={<Radio />} label="Seller" />
          </RadioGroup>
        </FormControl>
      <br></br>

      <GoogleLogin
      clientId="502757580834-9evok99ilo57je9mo6hciqpprf35thqa.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      />
      </div>
  );
}
}

export default Welcome;
