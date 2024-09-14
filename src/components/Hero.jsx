import React from "react";
import Image1 from "../assets/Hero/Woman.png";
import Image2 from "../assets/Hero/Shopping.png";
import Image3 from "../assets/Hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Up to 50% off on Women's Wear",
    description:
      "Shop the latest styles in women's fashion with discounts up to 50%. Don't miss out on exclusive deals!",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on Men's Wear",
    description:
      "Upgrade your wardrobe with trendy men's wear at 30% off. Grab these limited-time offers now!",
  },
  {
    id: 3,
    img: Image3,
    title: "Huge Sale! Up to 70% off on All Products",
    description:
      "Enjoy massive discounts across all categories. Save big with up to 70% off on selected items!",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    className="text-7xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div>
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[350px] h-[350px] sm:h-[500px] sm:w-[500px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;