import React, { useState } from 'react'
import styled from 'styled-components'
import ZipProductWidget from '../components/ZipProductWidget'
import { Add, Remove } from '@material-ui/icons'
import { useLocation} from 'react-router-dom'
import { IconButton } from '@material-ui/core'

const StyledProductPage = styled.div`
    display: flex;
    padding: 50px 150px;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 20px 0px;
    }
`

const StyledImage = styled.div`
    flex: 1;
    margin-right: 50px;
    margin-bottom: 20px;
    background-color: #f5fbfd;
    width: 100%;

    @media (max-width: 768px) {
      margin-right: 0px;
    }
`

const Image = styled.img`
  /* width: 100%; */
  height: 70vh;

  @media (max-width: 768px) {
      height: 40vh;
    }
`

const Desc = styled.p`
    margin: 20px 0px;
    width: 70%;

    @media (max-width: 768px) {
      width: 100%;
    }
`

const StyledInfo = styled.div`
  flex: 1;
  width: 70%;
  @media (max-width: 768px) {
      width: 100%;
    }
`

const Title = styled.h1`
    font-weight: 500;
`

const Price = styled.span`
    font-weight: 500;
    font-size: 1.5rem;
`

const StyledFilter = styled.div`
    width: 70%;
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 100%;
    }
`

const FilterTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0px;
`

const FilterDropdown = styled.select`
    border: 1px solid black;
    padding: 10px 10px 10px 5px;
    font-size: 18px;
    font-weight: bold;

    &:hover {
      border: 1px solid #b0b0b0;
    }
`

const FilterOption = styled.option`
  
`

const Quantity = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const AddToCartSection = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;

    @media (max-width: 768px) {
      width: 100%;
    }
`

const Button = styled.button`
    padding: 15px 25px;
    border: 2px solid teal;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
    transition: 0.3s ease;

    &:hover {
      background-color: teal;
      color: white
    }
`

const ProductPage = ({onAddToCart}) => {
  
  const location = useLocation();
  const product = location.state;

  const [quantity, setQuantity] = useState(1);

  function updateQuantity(quant) {
    if(quantity === 1 && quant < 0) return
    setQuantity(quantity + quant)
  }

  return (
    <StyledProductPage>
      <StyledImage>
        <Image src ={product.image.url}/>
      </StyledImage>
      <StyledInfo>
        <Title>{product.name}</Title>
        <Price>{product.price.formatted_with_symbol}</Price>
        <ZipProductWidget reload />
        <StyledFilter>
            <FilterTitle>Colour</FilterTitle>
            <FilterDropdown>
              <FilterOption>White</FilterOption>
              <FilterOption>Black</FilterOption>
              <FilterOption>Red</FilterOption>
            </FilterDropdown>
            <FilterTitle>Size</FilterTitle>
            <FilterDropdown>
              <FilterOption>Small</FilterOption>
              <FilterOption>Medium</FilterOption>
              <FilterOption>Large</FilterOption>
            </FilterDropdown>
        </StyledFilter>
        <AddToCartSection>
                <Quantity>
                  <IconButton onClick={() => updateQuantity(-1)}>
                  <Remove />
                  </IconButton>
                  <Amount>{quantity}</Amount>
                  <IconButton onClick={() => updateQuantity(1)}>
                  <Add />
                  </IconButton>
                </Quantity>
                <Button onClick={() => onAddToCart(product.id, quantity)}>Add to Cart</Button>
            </AddToCartSection>
            <br></br>
            <h4>Description</h4>
            <Desc dangerouslySetInnerHTML={{__html: product.description}}></Desc>
      </StyledInfo>
    </StyledProductPage>
  )
}

export default ProductPage