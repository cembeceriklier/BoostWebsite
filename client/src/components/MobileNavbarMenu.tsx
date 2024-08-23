import tw from "twin.macro"
import styled from '@emotion/styled';

const MobileNavbarMenu = ({ isClose }:MobileMenuProps) => {

  return (
    <Mobile_NavbarMenu_Container isClose = {isClose}>
        <Mobile_MenuLink >
          <Mobile_MenuRef href="/"> Anasayfa </Mobile_MenuRef>
        </Mobile_MenuLink>
        <Mobile_MenuLink>
          <Mobile_MenuRef href="/Boosting-services">Boosting</Mobile_MenuRef>
        </Mobile_MenuLink>
        <Mobile_MenuLink>
          <Mobile_MenuRef href="/Coaching-services">Coaching</Mobile_MenuRef>
        </Mobile_MenuLink>
        <Mobile_MenuLink>
          <Mobile_MenuRef href="/Marketplace">Market</Mobile_MenuRef>
        </Mobile_MenuLink>
        <Mobile_MenuLink>
          <Mobile_MenuRef href="/Contact-us">Iletişim</Mobile_MenuRef>
        </Mobile_MenuLink>
    </Mobile_NavbarMenu_Container>
  )
}

const Mobile_NavbarMenu_Container = styled.ul<MenuProps>(({ isClose }) => [
  tw`
    flex
    flex-wrap
    justify-center 
    items-end
    flex-col  

    transition-all 
    duration-[1s]
    ease-out 


    my-20
    opacity-0
  `,
  isClose && tw`mx-8 opacity-100`
])

const Mobile_MenuLink = tw.li`  
    my-2
`;


const Mobile_MenuRef = tw.a`
  hover:text-red-600

  text-white
  no-underline
  text-base
  font-bold
`;

interface MobileMenuProps {
  isClose: boolean;
}

interface MenuProps {
  isClose: boolean;
}

export default MobileNavbarMenu