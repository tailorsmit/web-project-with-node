import React from 'react'

const SellerHome = (props)=>{

    const newProduct =
        {
             sellername:JSON.parse(sessionStorage.userdata).email
        };
    
   const inputHandler=(event)=>{
       newProduct[event.target.name] = event.target.value;
    }

   const onSubmtiHandler=()=>{
       console.log(JSON.stringify(newProduct));

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://ec2-13-232-150-155.ap-south-1.compute.amazonaws.com:9000/";
    fetch(proxyurl+url+"/products",{
    method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, /',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newProduct) 
    }).then(res=>res.json())
      .then(res => {
        console.log(res)
       // this.setState({redirect:true})
      });
    }
    
    return(
    <div>
        <h1>Seller Home Page</h1>
        <h1> Product Name : <input type="text" name={"name"}  onInput={(event)=>inputHandler(event)}/></h1>
        <h1> Type : <input type="text" placeholder="Product or Service" name="type"  onChange={(event)=>inputHandler(event)} /></h1>
        <h1> Descirption  : <input type="text" name="specification"   onChange={(event)=>inputHandler(event)} /></h1>
        <h1> Price/Rate : <input type={Number} name="price"   onChange={(event)=>inputHandler(event)} /> </h1>
        <button onClick={onSubmtiHandler}> Submit</button>
        
    </div>




    
    )
}

export default SellerHome;