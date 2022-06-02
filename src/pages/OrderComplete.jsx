import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { Dimmer, Loader } from 'semantic-ui-react'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const OrderComplete = ({ cart, refreshCart }) => {

	const [searchParams] = useSearchParams();
	const checkoutResult = searchParams.get('result');
	const checkoutId = searchParams.get('checkoutId');
	const [charged, setCharged] = useState(false);

	if (searchParams.get('result') === 'cancelled') {
		window.location.replace("http://localhost:3000/checkout?cancelled")
	}

	useEffect(() => {
		refreshCart();
	}, []);

	if(!cart.line_items) {
		return (
			<section>
				<Dimmer active page>
					<Loader>Verifying order...</Loader>
				</Dimmer>
			</section>
		);
	} else {
		var cartTotal = cart.subtotal.raw;
		ZipChargeAPICall();
	}

	function ZipChargeAPICall() {
		if(checkoutResult === 'approved') {
			fetch('/charges/', {
				method: 'POST',
				credentials: 'same-origin',
				headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer dm07oN8rCzjhy6Uo0kS8lx0fEMsz1LthyQb9OKWpvn8=',
						'Zip-version': '2017-03-01',
						'Accept': '*/*',
						'Access-Control-Allow-Origin': 'http://localhost:3000/',
				},
				body: JSON.stringify({
					"authority": {
						"type": "checkout_id",
						"value": checkoutId
					},
					"reference": "TEST_CHARGE_REF",
					"amount": cartTotal,
					"currency": "AUD",
					"capture": true
				})
			}).then(res => res.json())
				.then(data => {
					console.log(data)
				})
				.catch((error) => {
					console.error('Error: ', error)
				})
		}
		setCharged(true);
	}

	console.log(charged);
  return (
    <>
    <section> 
        <Container>
            Congratulations! Your order is completed
        </Container>
    </section>
    </>
  )
}

export default OrderComplete