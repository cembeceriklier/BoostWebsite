import tw from "twin.macro"
import styled from '@emotion/styled';

const MobileMenu = ({ isClose }:MobileMenuProps) => {

  return (
    <Mobile_NavbarMenu_Container isClose = {isClose}>
      <Member_Container>
        <UserInfo>
          <UserProfile>
            <UserImage src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
          </UserProfile>
          <UserName>
            Cem Berk
          </UserName>
        </UserInfo>
        <BalanceInfo>
        </BalanceInfo>
      </Member_Container>
      <Link_Container>
        <Mobile_MenuLink >
          <Mobile_MenuRef href="/"> Hompage </Mobile_MenuRef>
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
          <Mobile_MenuRef href="/Contact-us">Contact</Mobile_MenuRef>
        </Mobile_MenuLink>
      </Link_Container>
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
    text-right

    duration-500
    ease-in-out
    px-1

    opacity-0
  `,
  isClose ? tw` opacity-100` : tw` opacity-0 transition-all duration-200 ease-in-out`
])

const Member_Container = tw.div`
  flex
  flex-col
  items-end
  
  mb-10
`;

const UserInfo = tw.div`
  flex
  flex-col
  items-end
`

const UserName = tw.span`
  text-right
`;

const UserProfile = tw.div`
  w-14
  pb-3
`;

const UserImage = tw.img`
  rounded-full
`;

const BalanceInfo = tw.div`

`

const Link_Container = tw.div`

`;

const Mobile_MenuLink = tw.li`  
    my-5
`;


const Mobile_MenuRef = tw.a`
  hover:text-red-600

  text-white
  no-underline
  text-base
`;

interface MobileMenuProps {
  isClose: boolean;
}

interface MenuProps {
  isClose: boolean;
}

export default MobileMenu