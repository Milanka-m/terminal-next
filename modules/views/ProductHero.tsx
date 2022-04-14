import * as React from 'react';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

interface ProductHeroProps {
  handleClickOpen: () => void
}

const backgroundImage =
  '/images/banner-image.webp';

const ProductHero: React.FC<ProductHeroProps> = ({ handleClickOpen }) => {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9',
        backgroundPosition: 'center',
      }}
    >
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography 
        color="inherit" 
        align="center" 
        variant="h2" 
        component="h1"
        marked="center" 
        sx={{ mb: 5, maxWidth: 1000 }}
        >
          Cтроительно-отделочная компания Терминал-М | 
          Строительство. Отделка. Проектирование
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        component="span"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Заказать проект
      </Typography>
      <Button
        id="fast-start"
        onClick={() => handleClickOpen()}
        color="secondary"
        variant="contained"
        size="large"
        sx={{ minWidth: 200 }}
      >
        Оставить заявку
      </Button>
    </ProductHeroLayout>
  )
}

export default ProductHero