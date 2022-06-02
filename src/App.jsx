import Home from "./pages/Home";
import { Button, Popup, Radio, Modal, Form, Checkbox } from 'semantic-ui-react'
import styled from 'styled-components';
import { useState } from "react";
import React from "react";

const ZipSettingsContainer = styled.div`
    display: flex;
    padding: 30px;
    flex-direction: column;
`

const SettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const App = () => {

  const [checkoutType, setCheckoutType] = useState('standard');
  const [open, setOpen] = useState(false);

  const ZipSettingsPopup = () => (
    <ZipSettingsContainer>
        <SettingsHeader>
          <h1>Demo Site Settings</h1>
          <div>
            <span style ={{textAlign: 'center', verticalAlign: 'center', marginRight: '20px'}}>Developer Mode</span>
            <Popup basic trigger={<Radio toggle disabled />} content="Coming soon!"/>
            
          </div>
        </SettingsHeader>
        <h3>Select Checkout type</h3>
        <Form>
          <Form.Field>
            <Checkbox radio label='Standard Checkout' value='standard' checked={checkoutType === 'standard'} onChange={() => setCheckoutType('standard')}/>
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Tokenised Checkout' value='tokenisation' checked={checkoutType === 'tokenisation'} onChange={() => setCheckoutType('tokenisation')}/>
          </Form.Field>
          <Form.Field>
            <Checkbox radio disabled label='Lightweight Virtual Checkout' value='standard' checked={checkoutType === 'vcn'} onChange={() => setCheckoutType('vcn')}/>
          </Form.Field>
        </Form>
    </ZipSettingsContainer>
  )

  return (
    <>
      <Home checkoutType={checkoutType}></Home>
      <Modal content={<ZipSettingsPopup />} closeOnDocumentClick open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)} trigger={<Button  size='massive' style={{position: 'fixed', bottom: 30, right: 30}} icon='settings' ></Button>}>

      </Modal>
    </>
  );
}

export default App;