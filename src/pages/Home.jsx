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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './ProductPage';
import ZipStripBanner from '../components/ZipStripBanner';
import OrderComplete from './OrderComplete';
import ScrollToTop from '../scripts/ScrollToTop';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const Home = () => {

    const [products, setProducts] =  useState([]);
    const [cart, setCart] = useState({});
    const [checkoutType, setCheckoutType] = useState('standard');
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('')

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

        setCart(item.cart)
    }

    const handleUpdateCartQuantity = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, {quantity});
        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
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

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message)
        }
    }
    

    useEffect(() => {
        refreshCart();
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
                    <ScrollToTop />
                    <Routes>
                        <Route exact path = "/" element={<Products products={products} onAddToCart={handleAddToCart} emptyCart={emptyCart}/>} />
                        <Route exact path = "/cart" element={<Cart cart={cart} emptyCart={emptyCart} updateCart={handleUpdateCartQuantity} removeFromCart={handleRemoveFromCart}/>} />
                        <Route exact path = "/zip-landing-page" element={<LandingPage />}/>
                        <Route exact path = "/checkout" element={<Checkout checkoutType={checkoutType} cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>} />
                        <Route path = "/products/:id" element={<ProductPage updateCart={handleUpdateCartQuantity} onAddToCart={handleAddToCart}/>} />
                        <Route path = "/order-complete" element={<OrderComplete cart={cart} refreshCart={refreshCart}/>} />
                    </Routes>
                </StyledMainContainer>
                <Footer />
            </>
        </Router>
    )
}

export default Home;