import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./Item.css";
// import ItemCount from '../Count/ItemCount'
import { Link } from "react-router-dom";

const MultiActionAreaCard = ({ img, title, description, price, id }) => {
  //  const onAdd = (number) =>{
  //         alert(`Agregaste ${number} productos`)
  //       }

  return (
    <Card
      className="cardItem"
      sx={{
        maxWidth: 300,
        height: "100%",
      }}
    >
      <CardActionArea
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className=""
      >
        <CardMedia component="img" image={img} alt="img" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {description}
          </Typography> */}
          <Typography variant="h5" className="precio">
            ${price}
          </Typography>

          <Link to={`/item/${id}`} className="Link">
            <Button
              variant="contained"
              color="info"
              style={{ marginTop: "10px" }}
            >
              DETALLES
            </Button>
          </Link>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          <ItemCount 
            onAdd={onAdd}
            initial={1}
            stock={10}/>
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default MultiActionAreaCard;