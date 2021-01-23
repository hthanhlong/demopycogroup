import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

export const BoxSpaceBetween = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
})((props) => <Box {...props} />);

export default BoxSpaceBetween;
