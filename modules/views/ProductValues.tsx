import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ 
        display: 'flex', 
        overflow: 'hidden', 
        bgcolor: 'secondary.light', 
        color: 'inherit' 
      }}
    >
      <Container 
        sx={{ 
          mt: 10, 
          mb: 8, 
          display: 'flex', 
          position: 'relative' 
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/images/icon.webp"
                alt="suitcase"
                sx={{ height: 65, width: 60 }}
              />
              <Typography 
                variant="h6"
                component="span" 
                sx={{ 
                  my: 5, 
                  color: 'inherit' 
                  }}
              >
                Стандарт
              </Typography>
              <Typography 
                variant="body1"
                component="span" 
                sx={{ mb: 3 }}>
                {
                  'При ведении строительно-монтажных работ на объектах, наша компания реализует внутренние стандарты и правила которые позволяют соблюдать график работ и бюджет проекта'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/images/icon-1.webp"
                alt="graph"
                sx={{ height: 65, width: 60 }}
              />
              <Typography 
                variant="h6"
                component="span" 
                sx={{ 
                  my: 5, 
                  color: 'inherit' 
                  }}>
                Качество
              </Typography>
              <Typography 
                variant="body1"
                component="span"
                sx={{ mb: 3 }}>
                {
                  'Мы выполняем полный комплекс строительно-монтажных работ'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/images/icon-2.webp"
                alt="clock"
                sx={{ height: 65, width: 60 }}
              />
              <Typography 
                variant="h4"
                component="span" 
                sx={{ 
                  my: 5, 
                  color: 'inherit' 
                  }}>
                Результат
              </Typography>
              <Typography 
                variant="body1" 
                component="span"
                sx={{ mb: 3 }}>
                {
                  'Мы дорожим своей репутацией и доверием наших клиентов, поэтому мы обещаем только, то что сможем исполнить и делаем больше чем обещаем'
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;