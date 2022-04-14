import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import ProductPriceItem from './ProductPriceItem'
import { Grid } from '@mui/material';
import { IProducts } from "../../types"

interface ICardProps {
  initialCards?: IProducts[]
  title?: string
}

const ProductPrice: React.FC<ICardProps> = ({ 
  initialCards, 
  title, 
}) => {
  return (
    <Container component="section" sx={{ mt: 9, mb: 9 }}>
      <Typography 
        variant="h2" 
        marked="center" 
        align="center" 
        component="h2"
        sx={{ 
          mt: 5, 
          mb: 5 
        }}
      >
        { title }
      </Typography>
      <Grid container spacing={2}>
            {initialCards && 
              initialCards.map((item) => {
                return (
                  <ProductPriceItem 
                    idButton={item.idButton}
                    title={item.title}
                    description={item.description}
                    poster={item.poster}
                    navlink={item.navlink}
                    key={item.id}
                  />
                )
              })}
        </Grid>    
    </Container>
  );
}

export default ProductPrice