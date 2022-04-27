import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import styled from 'styled-components';
import GlobalStyle from '../globalstyles';
import Products from '../pages/Products';
import Cart from '../components/Cart';
import LandingPage from './LandingPage';
import { commerce } from '../lib/commerce';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const Home = () => {

    const [products, setProducts] =  useState([]);
    const [cart, setCart] = useState({})

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

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])

    return (
        <Router>
            <>
                <GlobalStyle />
                <Navbar totalItems={cart.total_items}/>
                <StyledMainContainer>
                    <Routes>
                        <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart}/>} />
                        <Route exact path = "/cart" element={<Cart cart={cart} emptyCart={emptyCart} updateCart={handleUpdateCartQuantity} removeFromCart={handleRemoveFromCart}/>} />
                        <Route exact path = "/zip-landing-page" element={<LandingPage />}/>
                    </Routes>
                </StyledMainContainer>
                <Footer />
            </>
        </Router>
    )
}

export default Home;