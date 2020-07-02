import React from 'react'
import Grid from '@material-ui/core/Grid'
import Products from '../Products/Products';

const BuyerHome = (props)=>{
    return(
        <div>
      <Grid item container>
    <Grid item xs={false} sm={2} />
    <Grid item xs={12} sm={8}>
      <Products products={props.products} />
    </Grid>
    <Grid item xs={false} sm={2} />
    </Grid>
    </div>

    )

}

export default BuyerHome;