import React from 'react';
import { Slide } from 'react-slideshow-image';

const Slider = () => {
    const slideImages = [
        {
            url: 'https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=',
        },
        {
            url: 'https://www.stockvault.net/data/2011/05/31/124348/thumb16.jpg',
        },
        {
            url: 'http://1.bp.blogspot.com/-gpxneVSm7kI/ThBTFrvUD4I/AAAAAAAAA7o/qOySPGV6424/s1600/free%2Bnature%2Bwallpaper-794585.jpg',
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
