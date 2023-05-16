import Grid from '@mui/material/Grid';
import { IProduct } from '../../interfaces';
import * as React from 'react';
import { ProductCard } from './ProductCard';


interface Props {
    products: IProduct[];
  }


export const ProductList: React.FC<Props> = ({products}) => {
  return (
    <Grid container spacing={4}>
        { 
            products.map(product => (
                <ProductCard
                    key={product.slug}
                    product={product}
                />  
            ))
        
        }

    </Grid>
  )
}
