import { Theme, useTheme } from '@mui/material/styles';
import { createStyles, makeStyles, Styles } from '@mui/styles';

const useStyles = makeStyles(() => {
  const theme: Theme = useTheme();
  return createStyles({
    root: {
      width: '100%',
      marginBottom: theme.spacing(12),
    },
    title: {
      paddingRight: theme.spacing(2),
    },
    menu: {
      fontWeight: 400,
      paddingRight: theme.spacing(2),
      color: 'inherit!important'
    },
    selected: {
      color: '#eaf54e!important',
      "font-weight": '600!important',
    },
    rootBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0
    },
    itemBottom: {
      textAlign: 'center'
    },
    profile: {
      fontSize: '13px'
    }
  })
}
)

export default useStyles