import React from 'react'
import { Typography, Button, Grid } from '@material-ui/core'

import useStyles from '../styles/CartStyles'

const Cart = ({ cart, emptyCart, updateCart, removeFromCart }) => {
  const classes = useStyles();

  const EmptyCart = () => (
      <Typography variant="subtitle1">You have no items in your Shopping Cart!</Typography>
  );

  const FilledCart = () => (
      <>
        <div>Cart is full!</div>
        <Button onClick={() => emptyCart()}></Button>
      </>
  );

  if(!cart.line_items) return (<section>Loading...</section>);

  return (
    <section>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart</Typography>
        { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </section>
  );
}

export default Cart