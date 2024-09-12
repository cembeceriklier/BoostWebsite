import boosterlogo from "../assets/Logo.png";
import tw from "twin.macro";
const Logo = () => {
  return (
    <Logo_Ref href="/">
      <LogoImg_Container>
        <LogoImg src={boosterlogo}/>
      </LogoImg_Container>
      <LogoText>BOOSTER</LogoText>
    </Logo_Ref>
  )
}

const Logo_Ref = tw.a`
  // Container  
  flex
  no-underline
  cursor-pointer
  z-30
`;

const LogoImg_Container = tw.div` 
  // Container 
  flex
  items-center
  justify-center

  w-7
  h-auto
  mr-2
`;

const LogoImg = tw.img`
  // Container
  bottom-[1.5px]
  w-7
`;

const LogoText = tw.p`
  // Container
  inline-block  
  my-auto

  [font-weight: 500]
  text-white
  text-center
  no-underline
  text-sm
  font-medium
`;

export default Logo