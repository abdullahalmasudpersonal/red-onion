import React from 'react';
import banner from '../../../images/bannerbackground.png'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={banner} alt="First slide" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;