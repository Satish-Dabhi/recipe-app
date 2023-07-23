import React, { useState } from 'react';
import { TextField, InputAdornment, List, ListItem, ListItemText, ListItemIcon, Divider, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchComponent({ searchQuery, setSearchQuery }) {

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  return (
    <div>
      <TextField
        label="Search Recipe"
        variant="standard"
        value={searchQuery}
        onChange={handleSearchChange}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default SearchComponent;
