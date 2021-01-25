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
import { fakeData } from '../../fakedata/fakeData';

const Product = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [imgCheck, setImgCheck] = useState(null);

  const avatar_url = data?.user?.avatar_url;
  const display_name = data?.user?.display_name;
  const image_url = data?.images;
  const url = image_url['480w_still']?.url;

  const handleClickOpen = (url) => {
    setOpen(true);
    setImgCheck(url);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const widthChecked = useWidth() || 'lg';

  return (
    <React.Fragment>
      <Card>
        <Box p={1}>
          <Button disableRipple onClick={() => handleClickOpen(url)}>
            <CardMedia
              component="img"
              src={url}
              alt="text"
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
            {display_name ? (
              <IconButton>
                <AttachFileIcon fontSize="small" />
              </IconButton>
            ) : (
              <Box height="2.75rem" />
            )}
            <BoxSpaceBetween>
              {!fakeData
                ? 'Data is loading'
                : fakeData.map((item, index) => (
                    <Box display="flex" alignItems="center" key={index}>
                      <IconButton>{item.icon}</IconButton>
                      <Typography variant="caption">
                        {item.AnalysisData}
                      </Typography>
                    </Box>
                  ))}
            </BoxSpaceBetween>
          </BoxSpaceBetween>
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
      {/* ---------- Dialog ---------- */}
      <Dialog fullScreen open={open} onClose={handleClose}>
        {imgCheck && (
          <Box p={5}>
            <Box mb={2}>
              <ButtonCancel onClick={handleClose}>X</ButtonCancel>
            </Box>
            <CardMedia component="img" src={imgCheck} alt="text" />
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
