import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

function Video(props) {
  if (!props.videos?.length) return 'loading...';

  return (
    <Stack
      direction={props.direction || 'row'}
      flexWrap={'wrap'}
      justifyContent={'start'}
      gap={2}>
      {props.videos.map((video, index) => {
        return (
          <Box key={index}>
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard channelDetail={video} />}
          </Box>
        );
      })}
    </Stack>
  );
}

export default Video;
