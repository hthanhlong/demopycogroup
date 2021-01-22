import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './components/Product';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { API_ROOT } from './api/contants';

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const myData = await axios.get(`${API_ROOT}&limit=8`);
      const { data } = myData?.data;
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <Box display="flex" justifyContent="space-between" p={10}>
      <Grid container spacing={3}>
        {!data
          ? 'Loading data'
          : data.map((item, index) => (
              <Grid item xs={6} sm={4} md={4} lg={3} key={index}>
                <Product data={item} />
              </Grid>
            ))}

        {/* <Box
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PaginationOutlined />
        </Box> */}
      </Grid>
    </Box>
  );
}

export default App;
