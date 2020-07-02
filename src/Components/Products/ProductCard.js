import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const CoffeCard = props => {
    const {name, sellername, specification, type,price } = props;
    return (
      <Card>
        <CardHeader
          title={name}
          subheader={sellername}
        />
         <CardContent>
          <Typography variant="body2" component="p">
            {specification}
          </Typography>

        </CardContent>
        <CardActions>

          <Typography variant="body3" component="p">
            {type}
          </Typography>
          <Typography variant="body3" component="p">
            {price}
          </Typography>
         
          <Button size="small">BUY NOW</Button>
        </CardActions>
      </Card>
    );
  };
  
  export default CoffeCard;