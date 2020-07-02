import React from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@material-ui/core";

const Content = (props) => {
  const getProductCard = ProductCardObj => {
    return (
      <Grid item xs={12} sm={4}>
        <ProductCard {...ProductCardObj} />
      </Grid>
    );
  };

      

  return (
    <Grid container spacing={2}>
      {props.products.map(ProductCardObj => getProductCard(ProductCardObj))}
    </Grid>
  );
};

export default Content;