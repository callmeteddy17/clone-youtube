import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { SideBar, Video } from './';

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );
      setVideos(data.items);
    })();
  }, [selectedCategory]);
  // useEffect(() => {
  //   fetchFromAPI(`search?part=snippte&q=${selectedCategory}`).then((data) =>
  //     setVideos(data.items)
  //   );
  // }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '93vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}>
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ ml: 2.5, mt: 1.5, color: 'modeCustomed.text' }}>
          Copyright 2023 by Teddy
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', flex: 2, height: '90vh' }}>
        <Typography
          variant="h4"
          fontWeight={'bold'}
          mb={2}
          sx={{ color: 'modeCustomed.text' }}>
          {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
        </Typography>
        <Video videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
