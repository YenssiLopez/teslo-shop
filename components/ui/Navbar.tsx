import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Link display='flex' alignItems=' center' href="/">
                    <Typography variant='h6'> Teslo | </Typography>
                    <Typography sx={{ ml: 0.5 }}> Shop </Typography>
                </Link>


                <Box flex={1} />


                <Box sx={{ display: { sx: 'none', sm: 'block' } }}>
                    <Link href="/category/men" >
                        <Button>Hombres</Button>
                    </Link>



                    <Link href="/category/women">
                        <Button>Mujeres</Button>
                    </Link>


                    <Link href="/category/kid">
                        <Button>Niños</Button>
                    </Link>
                </Box>

                <Box flex={1} />

                <IconButton>
                    <SearchOutlinedIcon />

                </IconButton>

                <Link href="/cart">
                    <IconButton>
                        <Badge badgeContent={2} color="secondary">
                            <AddShoppingCartOutlinedIcon />
                        </Badge>
                    </IconButton>
                </Link>


                <Button>Menú</Button>

            </Toolbar>
        </AppBar>
    )
}
