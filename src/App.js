import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './components/Product';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { get } from 'axios';
import { API_ROOT } from './api/contants';
import Container from '@material-ui/core/Container';

function App() {
  const [data, setData] = React.useState([]);
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchData = await get(`${API_ROOT}&limit=${count * 20}`);
        const { data } = fetchData?.data;
        setData(data);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
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
        <Box py={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCount(count + 1)}
            disabled={data.length === 50 ? true : false}
          >
            + Load more
          </Button>
          &nbsp;&nbsp;
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setCount(1)}
          >
            Refresh
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
