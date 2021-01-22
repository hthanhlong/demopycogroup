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
import { Button, Dialog } from '@material-ui/core';

const Product = ({ data }) => {
  const image_url = data?.images;
  const url = image_url['480w_still']?.url;
  const avatar_url = data?.user?.avatar_url;
  const display_name = data?.user?.display_name;

  const [open, setOpen] = React.useState(false);
  const [imgCheck, setImgCheck] = React.useState(null);

  const handleClickOpen = (url) => {
    setOpen(true);
    setImgCheck(url);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Card>
        <Box p={1}>
          <Button onClick={() => handleClickOpen(url)}>
            <CardMedia component="img" src={url} alt="text" height="270px" />
          </Button>
        </Box>
        <Box px={2} pb={1}>
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
        </Box>
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
      <Dialog fullScreen open={open} onClose={handleClose}>
        {imgCheck && (
          <Box p={5} onClick={handleClose}>
            <CardMedia component="img" src={imgCheck} alt="text" />
            <br />
            <Button variant="contained" color="secondary">
              X
            </Button>
          </Box>
        )}
      </Dialog>
    </React.Fragment>
  );
};

Product.propTypes = {
  data: PropTypes.object,
};

export default Product;
