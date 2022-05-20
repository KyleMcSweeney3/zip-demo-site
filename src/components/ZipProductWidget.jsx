import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Helmet from 'react-helmet'

const ZipProductWidget = (callback) => {

  return (
    <>
      <Helmet>
        <script type="text/javascript" src="https://static.zipmoney.com.au/lib/js/zm-widget-js/dist/zip-widget.min.js"></script>
      </Helmet>
      <div 
        zm-asset="productwidget" 
        data-env="sandbox"
        data-zm-merchant="ec83c756-7b70-4bbd-be8b-48c41d2b871c"
        zm-widget="popup"
        data-zm-region="au">
      </div>
    </>
  )
}

export default ZipProductWidget