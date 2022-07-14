import React from "react";
import { Box, makeStyles, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeShortText } from "../../utils/makeShortText";

const useStyle = makeStyles((theme) => ({
  itemRow: {
    padding: "25px 35px",
    margin: "16px 0",
    background: "#fff",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
    borderTop: "1px solid #f0f0f0",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      padding: "25px 30px",
    },
  },
  image: {
    width: "60%",
    maxHeight:150,
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      margin:"15px 0",
      width: "100%",
    },
  },
  price: {
    fontSize: 20,
    fontWeight: 600,
  },
  text: {
    fontSize: 14,
    color: "#212121",
    marginBottom: 5,
    marginTop: 5,
  },
  centerItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  itemTitle:{
    color: "#212121",
    fontSize: 14,
    "&:hover": {
      cursor: "pointer",
      color: "#2874f0",
    },
  },
  paymentDetails:{
    paddingLeft:"2%",
    [theme.breakpoints.down("xs")]: {
      display:"flex",
      justifyContent:"space-between",
      paddingTop:10,
      paddingLeft:0,
    },
  }
}));

function OrderRow({ order }) {
  
  const classes = useStyle();
  const address = order.addressDetails;
  const orderDate = new Date(order.orderDate);

  var utcSec=orderDate.getTime()
  var myd = new Date(0); 
  myd.setUTCSeconds(utcSec/1000+(order.productDetails[0].warranty)*24*3600);
  // console.log(finalitem[0].warranty);
  console.log(order);
  


  return (
    <>
      {order?.items?.map((item, index) => {
        
        const finalitem=order.productDetails.filter(p => {
          console.log(p._id," ",item.productId);
          return p._id==item.productId});
        console.log("final item " , finalitem);
        return (

        <Box className={classes.itemRow}>
          <Grid container>
            <Grid item lg={2} md={2} sm={3} xs={12}>
              {/* Image */}
              <Box>
                <img
                  src={finalitem[0].url}
                  className={classes.image}
                  alt={finalitem[0].title.shortTitle}
                />
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={8}>
              {/* Title */}
              <Link to={`/product/${finalitem[0]._id}`}>
                <Typography className={classes.itemTitle} >
                  {makeShortText(finalitem[0].title.longTitle)}
                </Typography>
              </Link>
            </Grid>
            <Grid item lg={2} md={2} sm={3} xs={4} className={classes.centerItems}>
              {/* Price */}
              <span className={classes.price}>₹{item.price} </span>
              <span className={classes.price}>&nbsp;x {item.qty}</span>
            </Grid>
            <Grid item lg={2} md={2} sm={3} xs={12} className={classes.paymentDetails}>
              {/* Payment Mode */}
              <Typography className={classes.text}>
                {orderDate.toLocaleDateString()}            
              </Typography>
              <Typography className={classes.text}>
                {myd.setUTCSeconds(utcSec/1000+(finalitem[0].warranty)*24*3600)}
                {/* {myd.toLocaleDateString()}   */}
              </Typography>
              <Typography className={classes.text}>
                {order.paymentMode === "online" ? "Online" : "Cash on Delivery"}
              </Typography>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              {/* Address */}
              <Box>
                <Typography className={classes.text}>
                  {address.name}

                  <span style={{ marginLeft: 10 }}>{address.number}</span>
                </Typography>
                <Typography className={classes.text}>
                  {address.houseAddress}, {address.locality}, {address.city},{" "}
                  {address.state} -
                  <span> {address.pincode}</span>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )})}
    </>
  );
}

export default OrderRow;
