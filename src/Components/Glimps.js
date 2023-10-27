import axios from "axios";
import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Glimps = () => {
  const [product, setProduct] = useState([]);

  console.log(product);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    FetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
   
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    centerMode: true,
    // nextArrow: <Arrow />,
    // prevArrow: <Arrow />,
  };

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,
  // };


  return (
    <>
      <div className="px-6 mt-10">
        <div className="w-full h-60 pt-9 gap-2 p-2 border">
          {/* <Slider {...settings}>
            {product.map((item) => (
              <div
                className="w-50 h-50 flex justify-center items-center border rounded"
                key={item.id}
              >
                <img
                  className="max-h-40 h-40 w-40 pl-12 object-contain "
                  src={item.image}
                  alt=""
                />
              </div>

              // <div ref={sliderRef} key={item.id} className="keen-slider">
              //   <div className="keen-slider__slide"><img src={item.image} alt="" /></div>
              // </div>
            ))}
          </Slider> */}
          <Slider {...settings}>
            {product.map((item) => (
              <div
                className="w-50 h-50 flex justify-center items-center border rounded"
                key={item.id}
              >
                <img
                  className="max-h-40 h-40 w-40 pl-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 object-contain "
                  src={item.image}
                  alt=""
                />
              </div>

              // <div ref={sliderRef} key={item.id} className="keen-slider">
              //   <div className="keen-slider__slide"><img src={item.image} alt="" /></div>
              // </div>
            ))}
          </Slider>
          {/* <div className="slider"></div> */}
        </div>
      </div>
    </>
  );
};

export default Glimps;

// const[sliderRef, instanceRef] = useKeenSlider(
//   {
//     slideChanged() {
//       console.log("slide changed");
//     },
//   },
//   [
//     // add plugins here
//   ]
// );

// <div ref={sliderRef} key={item.id} className="keen-slider">
//   <div className="keen-slider__slide"><img src={item.image} alt="" /></div>
// </div>

//  <Slider {...settings}>
//    <div>
//      <h3>1</h3>
//    </div>
//  </Slider>;
