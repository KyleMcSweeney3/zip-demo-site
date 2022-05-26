import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import ZipProductWidget from '../components/ZipProductWidget'
import useStyles from '../styles/CartStyles';
import Helmet from 'react-helmet';
import { Button, Icon } from 'semantic-ui-react'
import { Delete } from '@material-ui/icons';
import { Link } from 'react-router-dom';


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
      width: 30px;
      flex: 1;

      @media (max-width: 768px) {
        margin-top: 40px;
        height: 40px;
      }
    }

    .title {
      flex: 4;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      margin-top: 20px;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }

    .quantity {
      display: flex;
      align-items: center;
      flex: 1;

      span {
        width: 30px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid green;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 5px;
      }
    }

    .remove {
      flex: 1;
      text-decoration: underline;
      
      Button {
        color: white;
      }
    }

    .price {
      flex: 1;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      font-size: 16px;
      font-weight: 550;
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
                <Button size="mini" color="red" compact onClick={() => updateCart(item.id, item.quantity - 1)}>-</Button>
                <span>{item.quantity}</span>
                <Button size="mini" color="green" compact onClick={() => updateCart(item.id, item.quantity + 1)}>+</Button>
              </div>
              <div className = "remove">
                <Button color="red" size="small" inverted onClick={() => removeFromCart(item.id)} animated='fade'>
                  <Button.Content visible>Remove</Button.Content>
                  <Button.Content hidden>
                    <Icon name='trash alternate' />
                  </Button.Content>
                </Button>
              </div>
              <p className = "price">{item.line_total.formatted_with_symbol}</p>
            </div>
          </StyledCartItem>
        ))}
      </>
  );

  if(!cart.line_items) return (<section>Loading...</section>);

  return (
    <>
      <Helmet>
          <script type="text/javascript" src="https://static.zipmoney.com.au/lib/js/zm-widget-js/dist/zip-widget.min.js"></script>
        </Helmet>
      <section>
          <div className={classes.toolbar} />
          <Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart</Typography>
          { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
          <div className={classes.checkout}>
            <div className={classes.continue}>
              <h4 className={classes.subtotal}>Subtotal: {cart.subtotal.formatted_with_symbol}</h4>
              { cart.subtotal.raw > 0 ?
              <>
                <ZipProductWidget />
                <Link to = "/checkout"><Button color="green" className = {classes.checkoutButton}>Checkout</Button></Link>
              </> : ''
              }
            </div>
          </div>
      </section>
    </>
  );
}

export default Cart