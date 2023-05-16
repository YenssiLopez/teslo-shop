import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

interface Props {

}

export const ItemCounter: React.FC<Props> = () => {
    return (
        <Box display='flex' alignItems='center'>
            <IconButton>
                <RemoveCircleOutline />
            </IconButton>
            <Typography sx={{ width: 40, textAlign: 'center' }}> 1 </Typography>
            <IconButton>
                <AddCircleOutline />
            </IconButton>
        </Box>
    )
}