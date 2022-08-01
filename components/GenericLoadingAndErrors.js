import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'

const GenericLoadingAndError = (props) => {
    const { loading, error } = props
    return (
        <Box sx={{textAlign: 'center',}}>
            {loading && (
                <Box sx={{ mt: 20 }}>
                    <CircularProgress />
                </Box>
            )}

            {!loading && error && (
                <Typography
                    sx={{color: 'error.main', mt: 20}}
                >
                    Something went wrong
                </Typography>
            )}
        </Box>
    )
}

export default GenericLoadingAndError

