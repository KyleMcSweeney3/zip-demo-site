import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    background-color: #F4F4F4;
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    padding-left: 100px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.h1`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`

const Button = styled.h1`
    padding: 10px;
    font-size: 14px;
    background-color: #411361;
    border-radius: 8px;
    width: 200px;
    color: white;
    text-align: center;
    vertical-align: center;
    cursor: pointer;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0);
        }
    };

    return (
        <div>
            <Container>
                <Arrow direction="left" onClick = {() => handleClick("left")}>
                    <ArrowBackIosNewOutlinedIcon />
                </Arrow>
                <Wrapper slideIndex =  {slideIndex}>
                    {sliderItems.map(item=> ( 
                    <Slide key={item.id}>
                        <InfoContainer>
                            <Title>
                                {item.title}
                            </Title>
                            <Desc>
                                {item.desc}
                            </Desc>
                            <Button>
                                ZIP NOW
                            </Button>
                        </InfoContainer>
                        <ImageContainer>
                            <Image src={ item.img}/>
                        </ImageContainer>
                    </Slide>
                    ))}
                </Wrapper>
                <Arrow direction = "right" onClick = {() => handleClick("right")}>
                    <ArrowForwardIosOutlinedIcon />
                </Arrow>
            </Container>
        </div>
    )
}

export default Slider
