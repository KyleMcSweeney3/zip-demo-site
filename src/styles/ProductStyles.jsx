import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
      root: {
        maxWidth: '100%',
        '&:hover': {
          backgroundColor: "rgb(202, 202, 202)",
          cursor: "pointer",
        }
      },
      media: {
        height: '0',
        paddingTop: '70%', // 16:9
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      price: {
        marginLeft: '1rem',
        marginTop: '1rem'
      }
}));