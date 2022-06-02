import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet';

const PageHeader = styled.h1`
  text-align: center;
  padding: 40px 0px;
`;

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <script type="text/javascript" src="https://static.zipmoney.com.au/lib/js/zm-widget-js/dist/zip-widget.min.js"></script>
      </Helmet>
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