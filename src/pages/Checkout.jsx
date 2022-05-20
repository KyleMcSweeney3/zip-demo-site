import React, { useEffect, useState } from 'react'
import { Typography} from '@material-ui/core'
import useStyles from '../styles/CheckoutStyles';
import ZipProductWidget from '../components/ZipProductWidget';
import { commerce } from '../lib/commerce';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Dimmer, Loader } from 'semantic-ui-react'
import styled from 'styled-components';
import Helmet from 'react-helmet';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

const states = [
    {
        value: "NSW",
        text: "NSW"
    },
    {
        value: "QLD",
        text: "QLD"
    },
    {
        value: "VIC",
        text: "VIC"
    },
    {
        value: "NT",
        text: "NT"
    },
    {
        value: "WA",
        text: "WA"
    },
    {
        value: "SA",
        text: "SA"
    },
    {
        value: "TAS",
        text: "TAS"
    },
    {
        value: "ACT",
        text: "ACT"
    }
]

const countries = [
    {
        value: "AU",
        text: "Australia"
    }
]

const Container = styled.div`
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
    }
`

const FormContainer = styled.div`
    flex: 2;
`

const CartContainer = styled.div`
    flex: 1;
    display: flex;
    margin: 0px 20px;
    height: 40vh;
    flex-direction: column;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    border: 0;
    font-weight: 400;
`

const PaymentMethodsContainer = styled.div`
    margin-top: 50px;
`

const Title = styled.h2`
    padding: 15px;
`

const Checkout = ({checkoutType, cart}) => {
  const classes = useStyles();    
  const [checkout, setCheckout] = useState(false)
  const [liveObject, setLiveObject] = useState();
  const [tokenId, setTokenId] = useState();
  const [paymentMethod, setPaymentMethod] = useState('zip');

  useEffect(() => {
    // let cartId = cart.id
    // commerce.checkout.generateToken(cartId, {type: 'cart' })
    //     .then(res => {
    //         setLiveObject(res.live)
    //         setTokenId(res.id)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // setCheckout(true)
  }, []);

  const ZipCheckoutButton = () => (
    <>
        
        <ZipProductWidget />
        <Button positive onClick={() => ZipCheckoutPost()}>Checkout With Zip</Button>
    </>
  )

  const CCCheckoutButton = () => (
    <Button positive>Checkout With Credit Card</Button>
)

  const LoadedCart = () => (
    <>
    {cart.line_items.map((item) => (
        <>
        <div>{item.name}</div>
        <div>{item.quantity}</div>
        <div>{item.line_total.formatted_with_symbol}</div>
        </>
    ))}
    </>
  )

  const LoadingCart = () => (
    <section>
        <Dimmer active page>
          <Loader>Loading</Loader>
        </Dimmer>
    </section>
  )

  const ZipCheckoutPost = () => {
    fetch('/checkouts/', {
          method: 'POST',
          redirect: 'follow',
          credentials: 'same-origin',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer dm07oN8rCzjhy6Uo0kS8lx0fEMsz1LthyQb9OKWpvn8=',
              'Zip-version': '2017-03-01',
              'Accept': '*/*',
              'Access-Control-Allow-Origin': 'http://localhost:3000/',
          },
          body: JSON.stringify({
            "shopper": {
                "first_name": "Zip",
                "last_name": "Test",
                "email": "kyle.mcsweeney@zip.co",
                "billing_address": {
                  "line1": "Level 1/182 Blues Point Rd",
                  "city": "McMahons Point",
                  "state": "NSW",
                  "postal_code": "20060",
                  "country": "AU"
                }
              },
              "order": {
                "reference": "TEST_DEMO_REFERENCE",
                "amount": cart.subtotal.raw,
                "currency": "AUD",
                "shipping": {
                  "pickup": true
                },
                "items": [
                  {
                    "name": "General Admission",
                    "amount": 60,
                    "quantity": 1,
                    "type": "sku",
                    "reference": "618c5f319bf4bc0bf069e096"
                  }
                ]
              },
              "config": {
                "redirect_uri": "http://localhost:3000/"
              }
          })
      }).then(res => res.json())
        .then(data => {
            if(data.state === "created") window.location.href=data.uri
        })
  }

  return (
      <>
        <Helmet>
            <script type="text/javascript" src="https://static.zipmoney.com.au/lib/js/zm-widget-js/dist/zip-widget.min.js"></script>
        </Helmet>
        <section>
            <h1>Checkout</h1>
            <h2>Billing Information</h2>
            <Container>
                <FormContainer>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                control={Input}
                                label='First name'
                                placeholder='First name'
                            />
                            <Form.Field
                                control={Input}
                                label='Last name'
                                placeholder='Last name'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Field width={10} control={Input} label='Email' type='email' placeholder='example@example.com'/>
                            <Form.Field width={6} control={Input} label='Phone Number' placeholder='0400000000'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Field width={10} control={Input} name='street' label='Address' placeholder='123 Example St'/>
                            <Form.Field width={6} control={Select} name='country' label='Country' placeholder='Australia' options={countries}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Field width={6} control={Input} name='city' label='City' placeholder='Sydney' />
                            <Form.Field width={6} control={Select} label='State' name='state' search fluid options={states} placeholder='NSW'/>
                            <Form.Field width={4} control={Input} name='Postcode' label='Postcode' placeholder='0000' />
                        </Form.Group>
                    </Form>
                    
                    <PaymentMethodsContainer>
                        <h2>Payment Methods</h2>
                        <Form>
                            <Form.Group>
                                <Form.Radio label='Zip - Buy now, pay later' value='zip' checked={paymentMethod === 'zip'} onChange={() => setPaymentMethod('zip')}/>
                                <Form.Radio label='Credit/Debit Card' value='cc' checked={paymentMethod === 'cc'} onChange={() => setPaymentMethod('cc')}/>
                            </Form.Group>
                        </Form>
                        { paymentMethod === 'zip' ? <ZipCheckoutButton /> : <CCCheckoutButton />}
                    </PaymentMethodsContainer>
                </FormContainer>
                <CartContainer>
                    <Title>Cart Summary</Title>
                    {!cart.line_items ? <LoadingCart /> : <LoadedCart />}
                </CartContainer>
            </Container>

        </section>
    </>
  )
}

export default Checkout