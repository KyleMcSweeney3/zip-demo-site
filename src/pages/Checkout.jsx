import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divided, Button } from '@material-ui/core'
import useStyles from '../styles/CheckoutStyles';
import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';

const steps = ['Shipping Address', 'Payment details'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();    

  const Confirmation = () => (
    <div>Confirmation</div>
  );

  const Form = () => activeStep === 0
    ? <AddressForm />
    : <PaymentForm />

  return (
      <>
        <Typography variant = "h4" align="center">
            Checkout
        </Typography>
        <section className={classes.checkoutSection}>
            <Paper className={classes.paper}>
                {activeStep === steps.length ? <Confirmation /> : <Form />}
            </Paper>
        </section>
    </>
  )
}

export default Checkout