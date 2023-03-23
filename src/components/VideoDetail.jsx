import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Video } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchFromAPI(
        `videos?part=snippet,statistics&id=${id}`
      );
      setVideoDetail(data.items[0]);
    })();
    (async () => {
      const data = await fetchFromAPI(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      );
      setVideos(data.items);
    })();
  }, [id]);

  if (!videoDetail?.snippet) return 'Loading...';
  return (
    <Box minHeight={'95vh'}>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box
            sx={{
              width: '100%',
              position: 'sticky',
              top: '86px',
            }}>
            <Stack sx={{ position: 'relative' }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
            </Stack>
            <Typography
              color={'modeCustomed.text'}
              variant={'h5'}
              fontWeight={'bold'}
              p={2}>
              {videoDetail.snippet?.title}
            </Typography>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              sx={{ color: 'modeCustomed.text' }}
              py={1}
              px={2}>
              <Link to={`/channel/${videoDetail.snippet?.channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6', lg: 'h3' }}
                  color={'modeCustomed.text'}
                  display="flex">
                  <CardMedia
                    image={videoDetail?.snippet?.thumbnails?.high?.url}
                    alt={videoDetail?.snippet?.title}
                    sx={{
                      borderRadius: '50%',
                      height: '36px',
                      width: '36px',
                      position: 'relative',
                      top: '-9px',
                      mr: 1,
                      border: '1px solid #e3e3e3',
                    }}
                  />
                  {videoDetail.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: '14px', color: '#AAAAAA', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                  {parseInt(videoDetail.statistics?.viewCount).toLocaleString()}{' '}
                  Views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                  {parseInt(videoDetail.statistics?.likeCount).toLocaleString()}{' '}
                  Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={'center'}
          alignItems={'center'}>
          <Video videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
