import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import { themeDark, themeLight } from './utils/theme';
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from './components';

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={theme === true ? themeDark : themeLight}>
      <BrowserRouter>
        <Box sx={{ backgroundColor: 'modeCustomed.background' }}>
          <Navbar setTheme={setTheme} theme={theme} />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:search" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
