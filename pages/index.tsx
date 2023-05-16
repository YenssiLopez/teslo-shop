import type { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import Typography from '@mui/material/Typography';
import { initialData } from '../database/products';
import { ProductList } from '../components/products';



const Home: NextPage = () => {
  return (
    <ShopLayout title={'Teslop-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'} >
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }} >Todos los Productos</Typography>

      <ProductList
        products={ initialData.products as any }
      />

    </ShopLayout>
  )
}

export default Home