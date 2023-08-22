import { Box, Button, Paper } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel'

const Item = ({
    item,
    key
}) => {
    return (

        <Box
            sx={{
                // backgroundImage: `url(${item})`,
                // backgroundRepeat: "no-repeat",
                // height: '385px',
                // width: '385px'
            }}
        >
            <img src={item} width={'100%'} height={'100%'} alt={`img-${key}`} />
        </Box>
    )
}

const CarouselLayout = ({
    items
}) => {

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

export default CarouselLayout;