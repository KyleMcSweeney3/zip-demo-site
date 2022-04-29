import React from 'react'
import styled from 'styled-components'

const PageHeader = styled.h1`
  text-align: center;
  padding: 40px 0px;
`;

const LandingPage = () => {
  return (
    <>
      <PageHeader>ZIP LANDING PAGE</PageHeader>
      <div zm-asset="landingpage" 
      data-env="sandbox"
      data-zm-merchant="ec83c756-7b70-4bbd-be8b-48c41d2b871c"
      zm-widget="inline"
      data-zm-region="au">
      </div>
    </>
  )
}

export default LandingPage