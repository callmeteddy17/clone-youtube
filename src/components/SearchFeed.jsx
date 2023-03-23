import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Video } from './';

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { search } = useParams();

  useEffect(() => {
    (async () => {
      const data = await fetchFromAPI(`search?part=snippet&q=${search}`);
      setVideos(data.items);
    })();
  }, [search]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', flex: 2, height: '90vh' }}>
      <Typography
        variant="h4"
        fontWeight={'bold'}
        mb={2}
        sx={{ color: 'modeCustomed.text' }}>
        Search Result: <span style={{ color: '#F31503' }}>{search}</span> videos
      </Typography>
      <Video videos={videos} />
    </Box>
  );
}

export default SearchFeed;
