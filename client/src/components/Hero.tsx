import tw from 'twin.macro';
import tPImg from "../assets/trustpılot.png";
import { HiArrowCircleRight } from "react-icons/hi";

const Hero = () => {

  return (
    <HeroContainer className="hero_container">
      <LeftContainer className="left_container">
        <TextContainer className="text_container">
          <LeftLine className="left_line animate-slideInFromLeft" />
          <Title_Container>
            <Title className="animate-slideInFromLeft">
              With a fast, energetic, and professional team, Turkey's friendly, reliable, and fastest <span className="text-black font-bold">Eloboost</span> service
            </Title>
          </Title_Container>
        </TextContainer>
        <Description className="description">
        </Description>
        <TrustPilotContainer className="trustpilot_container flex flex-row w-full">
          <TPText className="tp_text text-white">See our <span className="font-bold">2,755</span> reviews on</TPText>
          <TPImg className="tp_img ml-1" src={tPImg} alt="TrustPilot" />
          <TPText className="text-white">Trustpilot</TPText>
        </TrustPilotContainer>
        <GetStarted className="flex get_started mt-4 items-center md:flex-col md:items-start">
          <a className='text-white text-sm bg-black flex px-5 py-4 rounded-2xl hover:[color: #dfdee0] cursor-pointer'>Select Your Game</a>
          <a className='flex ml-3 lg:ml-4 md:mt-3 justify-center items-center cursor-pointer'>
            <div className='flex z-20 items-center justify-center hover:before:animate-ping hover:before:absolute hover:before:size-5 hover:before:z-10 hover:before:bg-white hover:before:rounded-full hover:before:duration-1000 transition-all ease-in-out'>
              <HiArrowCircleRight className='z-40' size={25} fill='purple' />
            </div>
            <h4 className='ml-1 text-white text-sm'>How It Works</h4>
          </a>
        </GetStarted>
      </LeftContainer>
      <RightContainer className="right_container mt-20">
        <div className="relative h-60 bg-cover bg-center bg-no-repeat bg-fixed">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent "></div>
        </div>
        
      </RightContainer>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = tw.div` 
  flex 
  flex-col
  md:justify-start
  sm:justify-center
  w-full
  md:min-w-[550px]
  pt-40
  sm:pt-32
  cursor-default
  h-full
  bg-hero 
  bg-no-repeat
  bg-center
  bg-cover
`;

const LeftContainer = tw.div`
  flex
  flex-col
  lg:w-[50vw]
  pl-10
  sm:pl-4
`;

const TextContainer = tw.div`
  flex
  flex-row
  justify-start
  overflow-hidden
  lg:min-w-[400px]
`;

const LeftLine = tw.div`
  flex
  bg-black
  mr-3
  min-w-[0.25rem]
  overflow-hidden
  z-20
`;

const Title_Container = tw.div`
  overflow-hidden
`;

const Title = tw.h1`
  inline-block
  text-white 
  font-bold
  lg:text-4xl
  sm:text-2xl
  md:text-3xl
  z-10
`;

const TrustPilotContainer = tw.div`
  flex
  flex-row
  justify-start
  pt-3
`;

const TPText = tw.h1``;

const TPImg = tw.img`
  w-5
`;

const RightContainer = tw.div`
  rounded-tl-3xl
  border-b-0
`;

const Description = tw.div``;

const GetStarted = tw.div``;
