import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { SORT_MOVIES_MENU_TEXT } from '../config/sort-movie-menu-text';
import { useSortMenu } from '../model/use-sort-menu';

const { button, menuItems } = SORT_MOVIES_MENU_TEXT;

const SortMoviesMenu = () => {
  const { anchorEl, open, handleSortClick, handleMenuClose, handleSortItemClick } = useSortMenu();

  return (
    <Box>
      <Button
        id="sort-button"
        aria-controls={open ? 'sort-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        startIcon={<SwapVertIcon />}
        onClick={handleSortClick}
      >
        {button}
      </Button>
      <Menu
        id="sort-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        slotProps={{
          list: {
            'aria-labelledby': 'sort-button',
          },
        }}
      >
        <MenuItem onClick={() => handleSortItemClick('title')}>{menuItems.title}</MenuItem>
        <MenuItem onClick={() => handleSortItemClick('year')}>{menuItems.year}</MenuItem>
        <MenuItem onClick={() => handleSortItemClick('id')}>{menuItems.newest}</MenuItem>
      </Menu>
    </Box>
  );
};

export default SortMoviesMenu;
