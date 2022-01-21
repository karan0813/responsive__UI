import React from 'react';
import { Slide } from 'react-slideshow-image';

const Slider = () => {


    const slideImages = [
        {
            url: 'https://empirestl.com.au/wp-content/uploads/2020/04/Bespoke-furniture-banner-1.png',
        },
        {
            url: 'http://furnitureurban.com/wp-content/uploads/2016/12/GLTU2705.jpg',
        },
        {
            url: 'http://www.maheshwarifurniture.com/img/banner_1.jpg',
        },
    ];
    return <div className=" bg-blue-300 ">
        <Slide>
            {slideImages.map((slideImage, index) => (
                <div className=" h-60" key={index}>
                    <div className="h-60 bg-no-repeat bg-center  bg-cover  object-contain" style={{ 'backgroundImage': `url(${slideImage.url}) ` }}>
                    </div>
                </div>
            ))}
        </Slide>
    </div>;
};

export default Slider;
