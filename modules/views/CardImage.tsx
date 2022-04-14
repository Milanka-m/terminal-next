import * as React from 'react';
import { ImageSlider } from '../../components'
import { Box, Container, Typography } from '@mui/material';
import { IPortfolio } from "../../types"

interface ICardImageProps {
	selectedImage?: IPortfolio
}

const CardImage: React.FC<ICardImageProps>= ({
  selectedImage
}) => {

  
  return (
    <Box>
      <Container maxWidth="md">
        <Box sx={{ 
          mt: 7, 
          mb: 5, 
          pr: 5, 
          pl: 5,
          boxSizing: 'border-box',
          '@media (max-width: 400px)': {
            mt: 8, 
            mb: 4, 
            pr: 0, 
            pl: 0,
          }, 
        }}>
             <ImageSlider 
                images={
                  selectedImage!.attributes.images.data.map((item: any) => `https://strapi.po-stroy31.ru${item.attributes.formats.medium.url}`)
                }
              />
             <Typography
                align="center"
                sx={{ mt: 3 }}
             >
                {selectedImage!.attributes.title}
             </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default CardImage