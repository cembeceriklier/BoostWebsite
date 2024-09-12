import { useEffect, useState } from 'react';
import tw from 'twin.macro';
import tPImg from "../assets/trustpılot.png";

const Hero = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [hasAnimated]);

  return (
    <HeroContainer className="hero_container">
      <LeftContainer className="left_container">
        <TextContainer className="text_container">
          <LeftLine className="left_line"/>
          <Title_Container>
            <Title className="animate-slideInFromLeft">
              With a fast, energetic, and professional team, Turkey's friendly, reliable, and fastest <span className="text-black font-bold">Eloboost</span> service
            </Title>
            {/* <Title_mobile className="title_mobile uppercase font-bold">
              Turkey's friendly, reliable, and fastest <span className="text-black font-bold">Eloboost</span> service!
            </Title_mobile> */}
          </Title_Container>
        </TextContainer>
        <Description className="description">
        </Description>
        <TrustPilotContainer className="trustpilot_container flex flex-row w-full">
          <TPText className="tp_text text-white">See our<span className="font-bold"> 2,755</span> reviews on</TPText>
          <TPImg className="tp_img ml-1" src={tPImg} alt="TrustPilot" />
          <TPText className="text-white">Trustpilot</TPText>
        </TrustPilotContainer>
        <GetStarted className="get_started">
        </GetStarted>
      </LeftContainer>
      <RightContainer className="right_container">
      
          <HeroLolContainer className="hero-lol_container"></HeroLolContainer>
          <HeroValorantContainer className="hero-valorant_container"></HeroValorantContainer>
          <HeroTFTContainer className="hero-tft_container"></HeroTFTContainer>
     
      </RightContainer>
    </HeroContainer>
  )
}

export default Hero;

// Styled-components with twin.macro
const HeroContainer = tw.div`
  flex 
  flex-col
  md:justify-start

  w-full
  sm:pt-6
  md:pt-6
  md:min-w-[550px]
  sm:max-w-[450px]

  px-5
  pt-5
  cursor-default
  h-full
`;

const LeftContainer = tw.div`
  flex
  flex-col
  lg:w-[50vw]

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

// const Title_mobile = tw.h1`
//   between-sm-md:inline-block
//   text-left
//   md:text-3xl
//   text-2xl
//   hidden
//   text-white
// `;

const TrustPilotContainer = tw.div`
  flex
  flex-row
  justify-start
  pt-3
`;

const TPText = tw.h1`
`;

const TPImg = tw.img`
  w-5
`;

const RightContainer = tw.div`
  absolute
  w-full
  h-[20%]
  bottom-0
  left-0
  bg-[rgba(161,118,218, .7)]
  shadow-lg

`;

const HeroLolContainer = tw.div`
`;

const HeroValorantContainer = tw.div`
`;

const HeroTFTContainer = tw.div`
`;

const Description = tw.div`
`;

const GetStarted = tw.div`
`;
