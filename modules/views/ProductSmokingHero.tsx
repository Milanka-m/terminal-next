import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '../../components/Typography'

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        my: 9, 
        borderRadius: 2 
      }}
    >
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 2,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          Есть вопросы? Нужна помощь?
        </Typography>
      </Button>
      <Typography 
        variant="subtitle1"
        component="span"
        sx={{ my: 3 }}
      >
        Мы здесь, чтобы помочь. Связаться!
      </Typography>
      <Box
        component="img"
        src="/images/producBuoy.svg"
        alt="buoy"
        sx={{ 
          width: 60,
          height: 60,
         }}
      />
    </Container>
  );
}

export default ProductSmokingHero