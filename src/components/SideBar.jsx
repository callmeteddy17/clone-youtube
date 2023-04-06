import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

function SideBar(props) {
  return (
    <Stack
      direction={'row'}
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
        zIndex: 1,
      }}>
      {categories.map((cate, index) => (
        <button
          key={index}
          className="category-btn"
          onClick={() => {
            props.setSelectedCategory(cate.name);
          }}
          style={{
            background: cate.name === props.selectedCategory && '#F31503',
            color: cate.name === props.selectedCategory ? 'white' : 'red',
          }}>
          <span
            style={{
              color: cate.name === props.selectedCategory ? 'white' : 'red',
              marginRight: '15px',
            }}>
            {cate.icon}
          </span>
          <span
            style={{
              opacity: cate.name === props.selectedCategory ? '1' : '0.8',
            }}>
            {cate.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}
export default SideBar;
