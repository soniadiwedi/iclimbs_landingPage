import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./clientCarosal.scss";

const ClientCarosal = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    // arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
            <img src="https://drhez8odc7m0y.cloudfront.net/wp-content/uploads/2021/10/Adani-1-1-1.png" alt="" />
        </div>
        <div>
          <img src="https://drhez8odc7m0y.cloudfront.net/wp-content/uploads/2021/10/1200px-Dr._Reddys_Laboratories_logo.svg-1-1.png" alt="" />
        </div>
        <div>
          <img src="https://drhez8odc7m0y.cloudfront.net/wp-content/uploads/2021/10/11-1.png" alt="" />
        </div>
        <div>
         <img src="https://drhez8odc7m0y.cloudfront.net/wp-content/uploads/2021/10/MG-Motors-1-1-1.png" alt="" />
        </div>
        <div>
          <img src="https://drhez8odc7m0y.cloudfront.net/wp-content/uploads/2019/01/samsung.png" alt="" />
        </div>
        <div>
          <img src="https://drhez8odc7m0y.cloudfront.net/wp-content/uploads/2021/10/3-2.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default ClientCarosal;
