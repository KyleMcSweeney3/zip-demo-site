import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import FormInput from './FormInput'

const AddressForm = () => {

  const methods = useForm();

  return (
    <>
        <Typography variant='h6' gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit=''>
                <Grid container spacing={3}>
                    <FormInput required name='firstName' label='First Name' variant="outlined"/>
                    <FormInput required name='lastName' label='Last Name' variant="outlined"/>
                    <FormInput required name='Email' label='Email' variant="outlined"/>
                    <FormInput required name='Mobile Phone' label='Mobile Phone' variant="outlined"/>
                    <FormInput required name='address' label='Address' variant="outlined"/>
                    <FormInput required name='City' label='City' variant="outlined"/>
                    <FormInput required name='Postcode' label='Postcode' variant="outlined"/>
                </Grid>
            </form>
        </FormProvider>
    </>
  )
}

export default AddressForm