import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const ButtonCancel = withStyles({
  root: {
    backgroundColor: 'red',
    color: '#fff',
    '&:hover': {
      backgroundColor: 'blue',
      color: 'yellow',
    },
  },
})((props) => <Button disableRipple {...props} />);

export default ButtonCancel;
