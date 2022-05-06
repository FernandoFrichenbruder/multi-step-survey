import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import Identify from '../molecules/Identify'
import Details from '../molecules/Details'
import Favorites from '../molecules/Favorites'
import Summary from '../molecules/Summary'

function Form() {

    const [page, setPage] = useState(0);

    const SurveySteps = [<Identify />, <Details />, <Favorites />, <Summary />]

    return (
        <Box
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            component="form"
        >
            {SurveySteps[page]}

            <Stack spacing={2} direction="row" alignItems="center">
                <Button 
                    variant="contained"
                    disabled={page === 0}
                    onClick={() => {setPage((currentPage) => currentPage - 1)}}
                >
                    Prev
                </Button>

                <Button 
                    variant="contained"
                    disabled={page === SurveySteps.length -1}
                    onClick={() => {setPage((currentPage) => currentPage + 1)}}
                >
                    Next
                </Button>

            </Stack>
        </Box>
    )
}

export default Form