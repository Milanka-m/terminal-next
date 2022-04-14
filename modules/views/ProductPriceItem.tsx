import { 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Grid, 
    Typography,
    Link
} from '@mui/material';
import React from 'react'
import Fade from "react-reveal/Fade"
import { IProducts } from "../../types"
import ym from "react-yandex-metrika"

const ProductPriceItem: React.FC<IProducts> = ({
    idButton,
    title,
    description,
    poster,
    navlink,
}) => {


    return (
        <Grid item xs={12} md={4}>
            <Fade bottom>
                <Card 
                    sx={{
                    height: 400, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    '@media (max-width: 900px)': {
                        height: '100%',
                      },
                    }}
                >
                    <CardMedia
                        component="img"
                        image={poster}
                        alt={title}
                        title={title}
                        sx={{height: 240, 
                            width: '100%',
                        }}
                    />
                    <CardContent>
                        <Typography
                            variant="h4"
                            component="text"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ 
                                mt: 4, 
                                mb: 4,
                             }}
                        >
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Link
                        id={idButton}
                        variant="subtitle1"
                        underline="hover"
                        color="secondary"
                        href={navlink}
                    >
                        Подробнее
                    </Link>
                    </CardActions>
                </Card>
            </Fade>
        </Grid>
    );
};

export default ProductPriceItem;