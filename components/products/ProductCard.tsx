
import React, { useState, useMemo } from 'react'
import { IProduct } from '../../interfaces';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

interface Props {
  product: IProduct;
}

export const ProductCard: React.FC<Props> = ({ product }) => {

  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return isHovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`;

  }, [isHovered, product.images])


  return (
    <Grid item xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} >

      <Card>
        <Link href="/product/slug">
          <CardActionArea>
            <CardMedia
              component='img'
              className='fadeIn'
              image={productImage}
              alt={product.title}
            />
          </CardActionArea>
        </Link>
      </Card>

      <Box sx={{ mt: 1 }} className='fadeIn'>
        <Typography fontWeight={700}> {product.title} </Typography>
        <Typography fontWeight={500}> {`$${product.price}`} </Typography>

      </Box>

    </Grid>
  )
}
