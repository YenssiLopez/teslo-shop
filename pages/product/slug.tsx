import { ShopLayout } from "../../components/layouts"
import { initialData } from '../../database/products';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ProductSlideshow } from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { SizeSelector } from '../../components/products/SizeSelector';

const product = initialData.products[0];

const ProductPage = () => {
  return (
    <ShopLayout title={ product.title } pageDescription={ product.description } >

        <Grid container spacing={3}>

            <Grid item xs={12} sm={7}>
            <ProductSlideshow
                images={ product.images }
            />     { /* Slideshow */ }
            </Grid>

            <Grid item xs={12} sm={5}>
                <Box display='flex' flexDirection='column'>
                    { /* titulo */ }
                    <Typography variant='h1' component='h1'> { product.title } </Typography>
                    <Typography variant='subtitle1' component='h2'> { `$${product.price}`  }</Typography>

                    { /* cantidad */ }

                    <Box sx={{ my:2 }}>
                        <Typography variant='subtitle2'>Cantidad</Typography>
                    < ItemCounter/>
                    <SizeSelector
                    selectedSize={product.sizes[0]}
                    sizes={product.sizes}
                    />
                    </Box>

                    {/* Agregar al carrito */}

                    <Button color="secondary" className="circular-btn">
                        Agregar al carrito
                    </Button>

                        {/*
                        <Chip label="No hay disponible" color="error" variant="outlined"/>
                        */}
                    
                    {/*Descripción*/}
                    <Box>
                        <Typography variant='subtitle2'>Descripción</Typography>
                        <Typography variant='body2'> {product.description} </Typography>

                    </Box>

                </Box>
            </Grid>


        </Grid>

    </ShopLayout>
  )
}

export default ProductPage