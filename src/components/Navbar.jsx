import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

function Navbar(props) {
  // console.log(props.theme);
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        backgroundColor: 'modeCustomed.background',
        top: 0,
        justifyContent: 'space-between',
        zIndex: 10,
      }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>

      <SearchBar />
      <div style={{ display: 'flex' }}>
        <div
          onClick={() => props.setTheme(!props.theme)}
          style={
            props.theme
              ? {
                  cursor: 'pointer',
                  fontSize: 25,
                  margin: '7.5px 15px',
                }
              : {
                  cursor: 'pointer',
                  fontSize: 25,
                  margin: '7.5px 15px',
                }
          }>
          {props.theme === true ? '🌙' : '🌞'}
        </div>
      </div>
    </Stack>
  );
}

export default Navbar;
