import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from '../Product';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import useGiphy from '../../utils/useFetch';

function Products() {
  const {
    trendingImgs,
    isFetching,
    nextOffset,
    total,
    page,
    setPage,
  } = useGiphy();

  const onScroll = (e) => {
    const view = e.target;

    const test = window.scrollY;

    console.log('test', test);

    // Reach bottom of the gallery
    if (view.scrollTop + view.clientHeight >= view.scrollHeight) {
      if (!isFetching && nextOffset < total - 1) {
        setPage({ ...page, offset: nextOffset });
      }
    }
  };

  return (
    <Box py={10} px={2}>
      <Container maxWidth="xl" onScroll={onScroll}>
        <Grid container spacing={3}>
          {trendingImgs &&
            trendingImgs.map((item, index) => (
              <Grid item xs={6} sm={4} md={4} lg={3} key={index}>
                <Product data={item} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Products;
