import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Checkbox from '@mui/material/Checkbox'

function Favorites() {
  return (
    <Box
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        autoComplete="off"
    >
        <h1>Favorites</h1>
        
        <TextField
            label="Favorite Book"
            id="favorite-book"
            name="favorite-book"
            size="small"
        />

        <p></p>
        <FormGroup>
            <FormLabel id="demo-checkbox-group-label">Favorite Color</FormLabel>
            <FormControlLabel control={<Checkbox />} label="Blue" />
            <FormControlLabel control={<Checkbox />} label="Black" />
        </FormGroup>
        
    </Box>
  )
}

export default Favorites