import { useEffect, useState } from 'react';
import fast from "../assets/timing.png";
import fastHover from "../assets/timing-hover.png";
import expert from "../assets/business-teamwork.png";
import expertHover from "../assets/business-teamwork-hover.png";
import satisfaction from "../assets/satisfaction.png";
import satisfactionHover from "../assets/satisfaction-hover.png";
import lowprice from "../assets/low-price.png";
import lowpriceHover from "../assets/low-price-hover.png";
import lollipop from "../assets/asa2.png";
import gradient from "../assets/Gradiend-Circle-1.png";

const Brand = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  useEffect(() => {
    setActiveIndex(0);
    setHoveredIndex(0);
  }, []);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const data = [
    {
      title: "Expert Team",
      text: '"Our Challenger league booster team is highly skilled, with strategic knowledge to help you reach your goals quickly. Every team member is experienced and ready to provide top-tier service for the best gaming experience."',
      imgSrc: expert,
      hoverImgSrc: expertHover,
      illustration: lollipop,
    },
    {
      title: "Fast Service",
      text: '"We deliver fast and effective solutions to help you achieve your desired rank in the shortest time. Our professional team ensures efficient account boosting, adhering to high service standards."',
      imgSrc: fast,
      hoverImgSrc: fastHover,
    },
    {
      title: "Affordable Prices",
      text: '"Our goal is to provide the fastest account boosting service at affordable rates. We offer competitive pricing without compromising quality, helping you reach your goals swiftly and economically"',
      imgSrc: lowprice,
      hoverImgSrc: lowpriceHover,
    },
    {
      title: "Satisfaction Guarantee",
      text: `"We prioritize your satisfaction, offering high-quality service with a guarantee. If you're not satisfied, we’ll make it right. Your experience is our top priority, and we strive to exceed your expectations."`,
      imgSrc: satisfaction,
      hoverImgSrc: satisfactionHover,
    },
  ];

  return (
    <div className='bg-black flex flex-col sm:px-4 px-10'>
      <img src={gradient} className='absolute opacity-25 left-[18%] w-[80%] cursor-default' alt="Gradient background" />
      <div className="flex flex-wrap justify-center mb-10 pt-20 gap-5 ">
        
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`px-5 py-1 border-2 z-20 border-customPurpleDark  rounded-full ${
              activeIndex === index || hoveredIndex === index
                ? "bg-customPurpleDark text-white"
                : "bg-customBlue1 text-textColor2"
            }`}
          >
            <div className='flex items-center justify-center'>
              <img
                src={activeIndex === index || hoveredIndex === index ? item.imgSrc : item.hoverImgSrc} 
                alt={item.title} 
                className="w-10 inline-block mr-2"
              />
              {item.title}
            </div>
          </button>
        ))}
      </div>
      <div className='flex flex-wrap-reverse items-center brand-responsive::mx-10 justify-center w-full max-h-[500px] '>

        <div className='lg:w-1/2 h-full lg:mt-16 brand-responsive:mt-10 brand-responsive:max-w-[400px]'>
          <img src={lollipop} className=" object-cover " />
        </div>

      
        {data.map((item, index) => (
        <div
          key={index}
          className={`flex lg:w-1/2 lg:min-w-[350px] lg:items-end brand-responsive:min-h-[192px] brand-responsive:items-center lg:h-full flex-col ${
            activeIndex === index
              ? "opacity-100 visible"
              : "opacity-0 hidden"
          }`}
          style={{ height: '', maxWidth: '' }}
        >
            <h4 className="text-customPurpleDark brand-responsive:text-center text-right text-xl">{item.title}</h4>
            <p className="text-textColor2 lg:max-w-[400px] pt-5 max-h-[350px] brand-responsive:text-center overflow-hidden text-right">{item.text}</p>
        </div>
      ))}
      
      </div>
    </div>
  )
}

export default Brand
