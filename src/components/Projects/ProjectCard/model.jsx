import * as React from 'react';
import DialogLayout from "../../Dialog";
import CarouselLayout from "../../Carousel";

const ProjectImages = ({
    open,
    handleClose,
    items
}) => {

    return (
        <DialogLayout open={open} handleClose={handleClose}>
            <CarouselLayout items={items}/>
        </DialogLayout>
    )
}

export default ProjectImages;