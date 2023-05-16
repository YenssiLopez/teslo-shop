import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import { ShopLayout } from "../../components/layouts"



const EmptyPage = () => {
  return (
    <ShopLayout title="Carrito vació" pageDescription="No hay artículos en el carrito de compras">
         <Box 
            display='flex' 
            justifyContent='center' 
            alignItems='center' 
            height='calc(100vh - 200px)'
            sx={{ flexDirection: { xs: 'column', sm: 'row' }}}
        >
            <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
            <Box display='flex' flexDirection='column' alignItems='center'>
                <Typography>Su carrito está vació</Typography>
                    <Link href='/' typography="h4" color='secondary' >
                        Regresar
                    </Link>
            </Box>


        </Box>
    </ShopLayout>
  )
}

export default EmptyPage