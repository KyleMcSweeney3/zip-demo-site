import React from 'react'
import { Grid } from '@material-ui/core'
import Product from '../components/Product';
import Slider from '../components/Slider'
import ZipStripBanner from '../components/ZipStripBanner'

const Products = ({products, onAddToCart}) => {
  return (
    <section>
        <Grid container justify="center" spacing={4}>
            { products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg = {3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>
    </section>
  )
}

export default Products