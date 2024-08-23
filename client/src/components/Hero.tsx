import tw from "twin.macro"
import tPImg from "../assets/trustpılot.png";
const Hero = () => {
  return (
    <HeroContainer>
      <LeftContainer>
        <TextContainer>
          <LeftLine/>
          <Title_wide className="font-bold">
          With a fast, energetic, and professional team, Turkey's friendly, reliable, and fastest Eloboost service!
          </Title_wide>
          <Title_mobile className="sm:uppercase">
          Turkey's friendly, reliable, and fastest Eloboost service!
          </Title_mobile>
        </TextContainer>
        <Description>
        </Description>
        <TrustPilotContainer>
          <TPText></TPText>
          <TPImg src={tPImg}></TPImg>
        </TrustPilotContainer>
        <GetStarted>
        </GetStarted>
      </LeftContainer>
      <RightContainer>
        <HeroLolContainer></HeroLolContainer>
        <HeroValorantContainer></HeroValorantContainer>
        <HeroTFTContainer></HeroTFTContainer>
      </RightContainer>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = tw.div`
  flex 
  flex-row
  sm:flex-col
  md:flex-col
  
  w-full

  pt-20
  sm:pt-3
  md:pt-3
  px-5
  lg:px-10
  xl:px-14
  2xl:px-20
  3xl:px-36
`;

const LeftContainer = tw.div`
  flex
  flex-col
  flex-1

  w-[50vw]
  sm:w-full
  md:w-full
`;

const TextContainer = tw.div`
  flex
  flex-row
`;

const LeftLine = tw.div`
  h-full
  bg-red-700
  
  w-3
  
  mr-4
  sm:mr-0
  md:mr-0
`;

const Title_wide = tw.h1`
  text-white

  text-4xl
  sm:text-xl
  md:text-2xl
  lg:text-3xl
  
  pl-2
  sm:pl-0

  sm:text-center
  md:text-center

  sm:hidden
`;

const Title_mobile = tw.h1`
  text-white
  font-semibold

  text-4xl
  sm:text-xl
  md:text-2xl
  lg:text-3xl

  pl-2
  sm:pl-0

  sm:text-center
  md:text-center

  hidden
  sm:flex
`;

const TrustPilotContainer = tw.div`
  flex
  flex-row
`;

const TPText = tw.h1`

`;

const TPImg = tw.img`
  w-20
`;

const RightContainer = tw.div`
  flex
  w-[50vw]
  sm:w-full
  md:w-full
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