import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import { IPortfolio } from "../../types"

interface IImageProps {
  title?: string
	initialImages?: IPortfolio[]
  handleClickOpen: (param: any) => void
  countImages?: number
}

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  margin: '2px',
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '30vh',
  [theme.breakpoints.down('md')]: {
    marginTop: 10,
    width: '100% !important',
    height: 270,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '3px solid currentColor',
    borderRadius: '10px'
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));


const ProductCategories: React.FC<IImageProps> = ({
  title,
  initialImages,
  handleClickOpen,
  countImages
}) => {

  return (
    <Container component="section" sx={{ mt: 8, mb: 8 }}>
      <Typography 
        variant="h2" 
        marked="center" 
        align="center" 
        component="h2"
      >
           {title}
      </Typography>
      <Box sx={{ 
        mt: 6, 
        display: 'flex', 
        flexWrap: 'wrap' 
        }}
      >
        {initialImages && 
          initialImages.slice(0, countImages).map((image) => (
          <ImageIconButton
            onClick={() => handleClickOpen(image)}
            key={image.id}
            style={{
              width: '32.5%',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(https://strapi.po-stroy31.ru${image.attributes.images.data[0].attributes.formats.medium.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="subtitle1"
                color="inherit"
                className="imageTitle"
              >
                {image.attributes.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}

export default ProductCategories