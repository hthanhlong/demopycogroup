import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  withStyles,
  Link,
} from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import demo1 from '../imgs/test.jpg';

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}))(Avatar);

const Product = ({ data }) => {
  console.log('items', data);

  return (
    <Box>
      <Card>
        <Box px={1} pt={1}>
          <CardMedia component="iframe" src={data.embed_url} alt="text" />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            py={1}
          >
            <Box>
              <IconButton>
                <AttachFileIcon fontSize="small" />
              </IconButton>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <IconButton>
                  <VisibilityIcon fontSize="small" />
                </IconButton>
                <Typography variant="caption">165</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <IconButton>
                  <ChatRoundedIcon fontSize="small" />
                </IconButton>
                <Typography variant="caption">6545</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <IconButton>
                  <FavoriteRoundedIcon fontSize="small" />
                </IconButton>
                <Typography variant="caption">5464</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
      <CardContent>
        <Link href="#">
          <Box display="flex" alignItems="center">
            <SmallAvatar alt="Remy Sharp" src={demo1} />
            &nbsp;&nbsp;
            <Typography variant="subtitle2">hksdjfkjshdf</Typography>
          </Box>
        </Link>
      </CardContent>
    </Box>
  );
};

Product.propTypes = {
  data: PropTypes.object,
};

export default Product;
