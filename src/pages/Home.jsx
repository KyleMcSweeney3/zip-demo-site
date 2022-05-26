import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import styled from 'styled-components';
import GlobalStyle from '../globalstyles';
import Products from '../pages/Products';
import Cart from '../components/Cart';
import LandingPage from './LandingPage';
import Checkout from './Checkout';
import { commerce } from '../lib/commerce';
import { BrowserRouter as Router, Routes, Route, useParams, useSearchParams } from 'react-router-dom';
import ProductPage from './ProductPage';
import ZipStripBanner from '../components/ZipStripBanner';
import { Modal } from 'semantic-ui-react';
import OrderComplete from './OrderComplete';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const Home = () => {

    const [products, setProducts] =  useState([]);
    const [cart, setCart] = useState({});
    const [checkoutType, setCheckoutType] = useState('standard');
    const [checkoutToken, setCheckoutToken] = useState();

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    // Expects a product id and quantity, passes these through the commerce API to add to cart
    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        alert(`Item has been added to cart!`)
        setCart(item.cart)
    }

    const handleUpdateCartQuantity = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, {quantity});
        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        alert(`Item has been removed from the cart!`)
        setCart(cart);
    }

    const emptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    }

    const deleteCart = async () => {
        const { cart } = await commerce.cart.delete();
        setCart(cart);
    }
    

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])

    return (
        <Router>
            <>
                <GlobalStyle />
                <Navbar totalItems={cart.total_items}/>
                <ZipStripBanner />
                {/* <Modal defaultOpen closeOnDimmerClick size='small'/> */}
                <StyledMainContainer>
                    <Routes>
                        <Route exact path = "/" element={<Products products={products} onAddToCart={handleAddToCart} emptyCart={emptyCart}/>} />
                        <Route exact path = "/cart" element={<Cart cart={cart} emptyCart={emptyCart} updateCart={handleUpdateCartQuantity} removeFromCart={handleRemoveFromCart}/>} />
                        <Route exact path = "/zip-landing-page" element={<LandingPage />}/>
                        <Route exact path = "/checkout" element={<Checkout checkoutType={checkoutType} cart={cart}/>} />
                        <Route path = "/products/:id" element={<ProductPage updateCart={handleUpdateCartQuantity} onAddToCart={handleAddToCart}/>} />
                        <Route path = "/order-complete" element={<OrderComplete cart={cart} emptyCart={emptyCart}/>} />
                    </Routes>
                </StyledMainContainer>
                <Footer />
            </>
        </Router>
    )
}

export default Home;