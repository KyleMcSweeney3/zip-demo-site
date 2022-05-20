import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
      root: {
        display: 'flex'
      },

      title: {
          marginBottom: '40px',
      },
      checkout: {
          display: 'flex',
          flexDirection: 'row',
          borderTop: '0.5px solid gray',
          padding: '20px 0px',
      },
      continue: {
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
      },
      subtotal: {
          display: 'flex',
          justifyContent: 'flex-end'
      },
      checkoutButton: {
          display: 'flex',
          justifyContent: 'flex-end',
          maxWidth: '110px',
      }

}));