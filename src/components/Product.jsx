import React from 'react'
import styled from 'styled-components'
import { AddShoppingCart, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const StyledProduct = styled.div`
    margin: 5px;
    min-width: 300px;
    height: 350px;
    background-color: #f5fbfd;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`   

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    height: 20rem;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover {
        background-color: $e9f5f5;
        transform: scale(1.1);
    }
`

const Product = ({ product, onAddToCart}) => {

    const productLink = {
        pathname: `/products/${product.name.replace(/ /g, '-').toLowerCase()}`,
    }

    return (
        <Link to={productLink} state={product} >
        <StyledProduct>
            {/* <Circle /> */}
            <Image src = {product.image.url} />
            <Info>
                <Icon onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined  />
                </Icon>
            </Info>
        </StyledProduct>
        </Link>
    )
}

export default Product;
