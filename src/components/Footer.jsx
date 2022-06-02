import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import IconLogo from './icons/Logo';

const Container = styled.footer`
    display: flex;
    /* height: 200px; */
    background-color: white;
    padding: 20px 80px;
    /* box-shadow: 30px 10px 0px rgba(0, 0, 0, 0.14); */

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;
        font-size: 16px;
    }
`

const Left = styled.div`
    margin-top: 40px;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Center = styled.div`
    margin-top: 40px;
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    li {
        padding: 5px 0px;
    }

    @media (max-width: 768px) {
        align-items: flex-start;
        text-align: left;
    }

    h3 {
        padding-bottom: 15px;
        @media (max-width: 768px) {
            padding-bottom: 5px;
        }
    }
`

const Right = styled.div`
    margin-top: 40px;
    flex: 1;
    padding: 20px;
    display: flex;
    justify-content: flex-end;

    .payment-tile {
        width: 60px;
        height: 36px;
        margin-right: 10px;

        @media (max-width: 768px) {
            margin: 5px;
        }
    }
`

const Logo = styled.div`
    font-size: 14px;
`

const Desc = styled.div`
    margin: 20px 0px;
`

const SocialsContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    <IconLogo />
                </Logo>
                <p>Copyright © Zip Co Limited 2022</p>
                <Desc>
                    This is a Demo Site. Nothing purchased on this site is real and is for demonstration purposes only.
                </Desc>
                <SocialsContainer>
                    <SocialIcon>
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <LinkedInIcon />
                    </SocialIcon>
                </SocialsContainer>
            </Left>
            <Center>
                <h3>Links</h3>
                <ul>
                    <li>
                        <Link to = "/zip-landing-page">
                            Zip - Buy now, pay later!
                        </Link>
                    </li>
                    <li>
                        <a href = "https://developers.zip.co/v2/docs" target = "_blank">
                            Zip Developer Docs
                        </a>
                    </li>
                </ul>

            </Center>
            <Right>
                <img src="https://static.zipmoney.com.au/assets/default/footer-tile/footer-tile-default.png" className = "payment-tile" alt="zip-logo" />
                <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" className = "payment-tile" alt="paypal-logo" />
                <img src="https://www.visa.com.au/dam/VCOM/regional/lac/ENG/Default/Partner%20With%20Us/Payment%20Technology/visapos/full-color-800x450.jpg" className = "payment-tile" alt="visa-logo"/>
                <img src="https://www.iconninja.com/files/285/913/164/american-express-charge-credit-card-amex-payment-icon.png" className ="payment-tile" alt="amex-logo"/>
                <img src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_circles_92px_2x.png" className ="payment-tile" alt="mastercard-logo"/>
            </Right>
        </Container>
    )
}

export default Footer
