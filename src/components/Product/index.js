import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {
  BoxSpaceBetween,
  ButtonCancel,
  SmallAvatar,
} from '../../stylesComponents';
import { Button, Dialog } from '@material-ui/core';
import useWidth from '../../utils/useWidth';

const Product = ({ data }) => {
  const [img, setImg] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = (url) => {
    setOpen(true);
    setImg(url);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const widthChecked = useWidth() || 'lg';

  return (
    <React.Fragment>
      <Card>
        <Box p={1}>
          <Button onClick={() => handleClickOpen(data.images.downsized.url)}>
            <CardMedia
              component="img"
              alt="text"
              src={data.images.downsized.url}
              height={
                widthChecked === 'xs'
                  ? ' 120px'
                  : widthChecked === 'sm'
                  ? '200px'
                  : '270px'
              }
            />
          </Button>
        </Box>
        <Box px={2} pb={1}>
          <BoxSpaceBetween>
            <IconButton>
              <AttachFileIcon fontSize="small" />
            </IconButton>
          </BoxSpaceBetween>
        </Box>
      </Card>
      <Box display="flex" alignItems="center" py={2} px={1}>
        <SmallAvatar />
        &nbsp;&nbsp;
        <Link href="#">
          <Typography variant="subtitle2">link name</Typography>
        </Link>
      </Box>
      {/* ---------- Dialog ---------- */}
      <Dialog fullScreen open={open} onClose={handleClose}>
        <Box p={5}>
          <Box mb={2}>
            <ButtonCancel onClick={handleClose}>X</ButtonCancel>
          </Box>
          <CardMedia
            component="img"
            src={img}
            alt="text"
            onClick={handleClose}
          />
        </Box>
      </Dialog>
    </React.Fragment>
  );
};

Product.propTypes = {
  data: PropTypes.object,
};

export default Product;
