import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './components/Product';
import Box from '@material-ui/core/Box';
import { get } from 'axios';
import { API_ROOT } from './api/contants';
import Container from '@material-ui/core/Container';

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const myData = await get(`${API_ROOT}&limit=5`);
        const { data } = myData?.data;
        setData(data);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

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
      </Container>
    </Box>
  );
}

export default App;

/* <Box
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PaginationOutlined />
        </Box> */
