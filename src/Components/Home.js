import React, { Component } from 'react';
import Appbar from './Appbar';
import Grid from '@material-ui/core/Grid';
import BuyerHome from './Buyers/BuyerHome';
import SellerHome from './Sellers/SellerHome';



class Home extends Component {

    state=({
        Product:[],
        Seach:'',
        type:''
    })


    inputHanlder=(event)=>{
        const search = event.target.value;
        var enterkey = 13
        this.setState({Seach:search});
        const type = {name:this.state.Seach};
       
        
        if(event.which===enterkey){
            //console.log(JSON.stringify(type))

           const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = "http://ec2-13-232-150-155.ap-south-1.compute.amazonaws.com:9000/";
            fetch(proxyurl+url+"products",{
            method: 'put',
              headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json'
              },
              body:JSON.stringify(type)
            }).then(res=>res.json())
              .then(res => {
        
                //console.log(res)
              //  products=res;
              //  console.log(products)
              this.setState({Product:res});
              });

        }
    }


    
componentDidMount(){
   const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://ec2-13-232-150-155.ap-south-1.compute.amazonaws.com:9000/";
    fetch(proxyurl+url+"products",{
    method: 'get',
      headers: {
        'Accept': 'application/json, text/plain, /',
        'Content-Type': 'application/json'
      }
    }).then(res=>res.json())
      .then(res => {

        //console.log(res)
      //  products=res;
      //  console.log(products)
      this.setState({Product:res});
      });

}

render() {
    const user = JSON.parse(sessionStorage.userdata);
    const type = sessionStorage.type;
    let re=null;
    let re1=null;
    if(type==='buyers'){
        re=(<BuyerHome products={this.state.Product}/>)
        re1=(   <Grid>
            <h1> Search for product </h1>
        <input type="text" onKeyUp={(event)=>this.inputHanlder(event)} onChange={(event)=>this.inputHanlder(event)} />

       
        </Grid>)
    }else if(type==='sellers'){
        re=(<SellerHome />)
    }

 //const name = sessionStorage.getItem("userdata")
return (
    
  <Grid container direction="column">
  <Grid item>
   <Appbar Name={user.firstname} />
     <br></br>
    </Grid>
    {re1}
  {re}  
</Grid>
);
}
}
export default Home;