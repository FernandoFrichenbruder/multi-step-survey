import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function Identify() {
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
        <h1>Identify</h1>
        
        <TextField
            label="Name"
            id="name"
            name="name"
            size="small"
        />

        <TextField
            label="E-mail"
            id="email"
            name="email"
            autoComplete="email"
            size="small"
        />
    </Box>
  )
}

export default Identify