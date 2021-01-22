import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

export const SmallAvatar = withStyles((theme) => ({
  root: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}))(Avatar);

export default SmallAvatar;
