import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, getData } from "./counterSlice";
import {
  Card,
  CardMedia,
  CardActions,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Hulk from "../../images/hulk.jpg";

export default function Counter() {
  const { value } = useSelector((state) => state.counter);
  const { values } = useSelector((state) => state.counter);
  console.log("check the counter value", value);

  const dispatch = useDispatch();
  return (
    <>
      <div className="cards">
        <Card sx={{ maxWidth: 345, margin: "5px" }}>
          <CardMedia sx={{ height: 400 }} image={Hulk} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hulk
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hulk is very madarchood guy are a widespread group of squamate
              reptiles, with over 6,000 species, ranging across all continents
              bhagoo.
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" onClick={() => dispatch(increment())}>
              <span>{value}</span>
              <ThumbUpOffAltIcon />
            </Button>
            <Button size="small" onClick={() => dispatch(decrement())}>
              <ThumbDownOffAltIcon />
              <span>{values}</span>
            </Button>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        {/* <button }>
          <ThumbUpOffAltIcon />
        </button>

        <button onClick={() => dispatch(decrement())}>
          <ThumbDownOffAltIcon />
        </button> */}
      </div>
    </>
  );
}
