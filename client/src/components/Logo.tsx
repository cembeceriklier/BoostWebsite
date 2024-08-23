import boosterlogo from "../assets/Logo.png";
import tw from "twin.macro";
const Logo = () => {
  return (
    <LogoRef href="/">
      <LogoImgContainer>
        <LogoImg src={boosterlogo}/>
      </LogoImgContainer>
      <LogoText>BOOSTER</LogoText>
    </LogoRef>
  )
}

const LogoRef = tw.a`
  flex
  
  no-underline
  cursor-pointer
`;

const LogoImgContainer = tw.div` 
  relative
  left-0
  top-0

  w-7
  h-7
  mr-2
`;

const LogoImg = tw.img`
  w-7
`;

const LogoText = tw.p`
  inline-block
  
  my-auto
  
  text-white
  text-center
  no-underline
  text-sm
  font-medium
`;

export default Logo