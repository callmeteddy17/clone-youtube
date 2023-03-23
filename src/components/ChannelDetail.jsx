import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CardMedia } from '@mui/material';
import { Video, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [banner, setBanner] = useState(null);

  const { id } = useParams();

  // useEffect(() => {
  //   fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
  //     setChannelDetail(data?.items[0])
  //   );

  //   fetchFromAPI(`search?channelID=${id}&part="snippet&order=data`).then(
  //     (data) => setVideos(data?.items[0])
  //   );
  // }, [id]);
  useEffect(() => {
    (async () => {
      const data = await fetchFromAPI(`channels?part="snippet&id=${id}`);
      setChannelDetail(data.items[0]);
      setBanner(data.items[0].brandingSettings?.image?.bannerExternalUrl);
    })();
    (async () => {
      const data = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      setVideos(data.items);
    })();
  }, [id]);
  return (
    <Box minHeight={'95vh'}>
      <Box>
        <CardMedia image={banner} style={{ height: '400px' }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display={'flex'} p="2">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Video videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
