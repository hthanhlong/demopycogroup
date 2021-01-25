import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './components/Product';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { get } from 'axios';
import { API_ROOT } from './api/contants';
import Container from '@material-ui/core/Container';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RefreshIcon from '@material-ui/icons/Refresh';
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  // Handle fetch data from API
  const fetchData = async (pageNumber) => {
    try {
      const fetchData = await get(`${API_ROOT}&limit=${pageNumber * 20}`);
      const { data } = fetchData?.data;
      setData(data);
    } catch (error) {
      console.log('error', error);
    }
  };

  // Handle load more
  const handleClick = () => {
    setCount(count + 1);
    setIsLoading(true);
  };

  // Handle refresh
  const handleRefresh = () => {
    setCount(1);
    if (count > 1) {
      setIsLoading2(true);
    }
  };

  useEffect(() => {
    fetchData(count);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoading2(false);
    }, 1500);
  }, [count]);

  return (
    <Box py={10} px={2}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {!data
            ? 'Loading data'
            : data.map((item, index) => (
                <Grid item xs={6} sm={4} md={4} lg={3} key={index}>
                  <Product data={item} />
                </Grid>
              ))}
        </Grid>
        <Box py={3} position="fixed" bottom="10px" right="40px">
          <Button
            disableRipple
            variant="contained"
            color="primary"
            onClick={handleClick}
            disabled={data.length === 50 ? true : false}
          >
            {!isLoading ? (
              <AddCircleOutlineIcon />
            ) : (
              <CircularProgress color="inherit" size="21px" />
            )}
          </Button>
          &nbsp;&nbsp;
          <Button
            disableRipple
            variant="contained"
            color="secondary"
            onClick={handleRefresh}
          >
            {!isLoading2 ? (
              <RefreshIcon />
            ) : (
              <CircularProgress color="inherit" size="21px" />
            )}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
