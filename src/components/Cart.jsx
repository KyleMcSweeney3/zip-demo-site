import React from 'react'
import { Typography, Button, Link } from '@material-ui/core'
import styled from 'styled-components'
import ZipProductWidget from '../components/ZipProductWidget'
import useStyles from '../styles/CartStyles';

const StyledCartItem = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    height: 140px;
    margin: 20px 5px;
    width: 100%;
    border-top: 0.5px solid gray;
    padding-top: 20px;

    img {
      padding: 0px;
      width: 40px;
      flex: 1;

      @media (max-width: 768px) {
        margin-top: 40px;
        height: 40px;
      }
    }

    .title {
      flex: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }

    .quantity {
      display: flex;
      align-items: center;
      flex: 1;
    }

    .remove {
      flex: 1;
      text-decoration: underline;
    }

    .price {
      flex: 1;
      align-items: center;
      justify-content: center;
    }

    .edit {
      display: flex;
      flex-direction: row;
      flex: 3;
      align-items: center;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
`;

const Cart = ({ cart, emptyCart, updateCart, removeFromCart }) => {
  const classes = useStyles();

  const EmptyCart = () => (
      <Typography variant="subtitle1">You have no items in your Shopping Cart!</Typography>
  );

  const FilledCart = () => (
      <>
        {cart.line_items.map((item) => (
          <StyledCartItem key = {item.id}>
            <img src={item.image.url} alt={item.name}/>
            <p className='title'>{item.name}</p>
            <div className='edit'>
              <div className="quantity">
                <Button type="button" size="small"onClick={() => updateCart(item.id, item.quantity - 1)}>-</Button>
                <span>{item.quantity}</span>
                <Button type="button" size="small"onClick={() => updateCart(item.id, item.quantity + 1)}>+</Button>
              </div>
              <div className = "remove">
                <Button type="button" size="small" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </div>
              <p className = "price">{item.line_total.formatted_with_symbol}</p>
            </div>
          </StyledCartItem>
        ))}
      </>
  );

  if(!cart.line_items) return (<section>Loading...</section>);

  return (
    <section>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart</Typography>
        { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        <div className={classes.checkout}>
          <div className={classes.continue}>
            <h4 className={classes.subtotal}>Subtotal: {cart.subtotal.formatted_with_symbol}</h4>
            <a href = "/checkout"><Button variant="contained" color="primary" className = {classes.checkoutButton}>Checkout</Button></a>
          </div>
        </div>
        <ZipProductWidget />
    </section>
  );
}

export default Cart