import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import { SmallAvatar } from '../stylesComponents';
import CardContent from '@material-ui/core/CardContent';

const Product = ({ data }) => {
  const embed_url = data?.embed_url;
  const avatar_url = data?.user?.avatar_url;
  const display_name = data?.user?.display_name;

  //   console.log('data', data);

  return (
    <React.Fragment>
      <Card>
        <Box p={1}>
          <CardMedia component="iframe" src={embed_url} title="demo" />
        </Box>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            {display_name ? (
              <IconButton>
                <AttachFileIcon fontSize="small" />
              </IconButton>
            ) : (
              <Box height="2.75rem"></Box>
            )}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
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
        </CardContent>
      </Card>
      <Box display="flex" alignItems="center" py={2} px={1}>
        <SmallAvatar alt="Remy Sharp" src={avatar_url || ''} />
        &nbsp;&nbsp;
        <Link href="#">
          <Typography variant="subtitle2">
            {display_name || 'Username'}
          </Typography>
        </Link>
      </Box>
    </React.Fragment>
  );
};

Product.propTypes = {
  data: PropTypes.object,
};

export default Product;
