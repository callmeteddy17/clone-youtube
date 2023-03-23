import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

function VideoCard(props) {
  return (
    <Card
      sx={{
        width: { xs: '92vw', sm: '358px', md: '320px' },
        // border: '1px solid black',
        borderRadius: '12px',
        boxShadow: 'none',
      }}>
      <Link to={`/video/${props.video.id?.videoId}`}>
        <CardMedia
          alt={props.video.snippet?.title}
          sx={{
            width: {
              xs: '100%',
              sm: '358px',
              md: '320px',
            },
            height: 180,
          }}
          image={props.video.snippet?.thumbnails?.high?.url}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: 'modeCustomed.cardContext', height: '106px' }}>
        <Link to={`/video/${props.video.id?.videoId}`}>
          <Typography
            variant="subtitle1"
            fontWeight={'bold'}
            color={'modeCustomed.text'}>
            {props.video.snippet?.title.slice(0, 90)}
          </Typography>
        </Link>
        <Link to={`/channel/${props.video.snippet?.channelId}`}>
          <Typography
            display={'flex'}
            variant="subtitle2"
            fontWeight={'bold'}
            color={'#AAAAAA'}>
            <CardMedia
              image={props.video?.snippet?.thumbnails?.high?.url}
              alt={props.video?.snippet?.title}
              sx={{
                borderRadius: '50%',
                height: '18px',
                width: '18px',
                mb: 2,
                mr: 1,
              }}
            />
            {props.video.snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: 13, color: '#AAAAAA', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
