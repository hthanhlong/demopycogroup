import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import { SmallAvatar } from '../stylesComponents';

const Product = ({ data }) => {
  const embed_url = data?.embed_url;
  const avatar_url = data?.user?.avatar_url;
  const display_name = data?.user?.display_name;

  console.log('data', data);

  return (
    <Box>
      <Card>
        <Box px={1} pt={1}>
          <CardMedia component="iframe" src={embed_url} title="demo" />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <IconButton>
                {display_name && <AttachFileIcon fontSize="small" />}
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
        <Box display="flex" alignItems="center">
          <SmallAvatar alt="Remy Sharp" src={avatar_url || ''} />
          &nbsp;&nbsp;
          <Link href="#">
            <Typography variant="subtitle2">
              {display_name || 'Username'}
            </Typography>
          </Link>
        </Box>
      </CardContent>
    </Box>
  );
};

Product.propTypes = {
  data: PropTypes.object,
};

export default Product;
