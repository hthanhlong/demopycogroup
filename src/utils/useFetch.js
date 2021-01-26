import { useState, useEffect } from 'react';
import { get } from 'axios';
import { API_KEY } from '../api/contants';

const DEFAULT_PAGE = {
  offset: 0,
  limit: 20,
};

const useGiphy = () => {
  const [trendingImgs, setTrendingImgs] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [total, setTotal] = useState(0);
  const [nextOffset, setNextOffset] = useState();
  const [page, setPage] = useState(DEFAULT_PAGE);

  useEffect(() => {
    setIsFetching(true);
    get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`, {
      params: { ...page },
    })
      .then(
        ({ data: { data: imgs, pagination } }) => {
          setTrendingImgs([...trendingImgs, ...imgs]);
          setTotal(pagination.total_count);
          setNextOffset(pagination.count + pagination.offset);
        },
        (err) => {
          setError(err);
        },
      )
      .finally(() => {
        setIsFetching(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return {
    trendingImgs,
    isFetching,
    error,
    nextOffset,
    total,
    page,
    setPage,
  };
};

export default useGiphy;
