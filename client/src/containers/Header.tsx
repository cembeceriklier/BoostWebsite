import { Navbar, Logo, Login, MobileNavbarMenu } from "../components";
import { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import styled from '@emotion/styled';
import tw from 'twin.macro';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setScrolling(scrollTop > 0);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer isScrolled={scrolling}>
        <LogoContainer className="justify-center !mr-6">
          <Logo />
        </LogoContainer>
        <RightSideComponents>
          <Navbar isScrolled={scrolling} />
          <Login />
          <NavbarMenuContainer>
            <NavbarButton isClose={isOpen} onClick={toggleMenu}>
              {isOpen 
                ? <RiCloseLine size={24} /> 
                : <RiMenuLine size={24} />}
            </NavbarButton>
            <NavbarMenu isClose={isOpen}>
              <LogoContainer className={`justify-start h-16 mx-3.5 ${isOpen ? "transition-all duration-700 ease-in-out opacity-100" : "transition-all duration-200 ease-in-out opacity-0"}`}>
                <Logo />
              </LogoContainer>
                <MobileNavbarMenu isClose={isOpen}/>
            </NavbarMenu>
          </NavbarMenuContainer>
        </RightSideComponents>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div<HeaderProps>(({ isScrolled }) => [
  tw` 
    fixed 

    before:absolute 
    flex
    flex-row
    justify-between
    items-center
    before:[content: ""]
    
    top-0
    left-0
    before:top-0
    before:left-0  
    
    w-full 
    h-20
    lg:h-16
    before:w-full 
    before:h-full 

    px-10
    md:px-4
    lg:px-10
    xl:px-14
    2xl:px-20
    3xl:px-36

    transition-all 
    duration-300
    ease-in-out  

    z-50 
    before:z-[-1] 
    content-none 
  
    before:bg-[rgba(0,0,0,.15)] 
    before:backdrop-blur-[50px]
  `,
  isScrolled && tw`h-16`
])

const RightSideComponents = tw.div`
  flex 
  flex-row 
  justify-end

  flex-1
  h-full
  
  ml-6
`;

const NavbarMenuContainer = tw.div`
  overflow-hidden
  hidden 
  lg:flex
  flex-row 
  items-center
  
  ml-3
`;

const NavbarButton = styled.button<NavbarMenuProps>(({ isClose }) => [
  tw`
    text-white

    flex 
    items-center 
    justify-center
    
    transition-all 
    duration-300
    ease-in-out 

    z-50
    rotate-0
  `,
  isClose && tw`rotate-90`
]);

const NavbarMenu = styled.div<NavbarMenuProps>(({ isClose }) => [
  tw`
    text-white 
    overflow-hidden
    
    transition-all 
    duration-[0.5s]
    ease-in-out 

    lg:absolute 
    lg:justify-center
    lg:items-center
    
    lg:top-0 
    lg:right-0
    lg:h-screen
    w-0
  
    lg:bg-[rgba(0,0,0,.1)]
    lg:backdrop-blur-[50px]
    lg:shadow-2xl
    lg:z-40 
  `,
  isClose && tw` lg:w-full`
]);

const LogoContainer = tw.div` 
  flex 
  items-center
  border-none
`;

interface HeaderProps {
  isScrolled: boolean;
}

interface NavbarMenuProps {
  isClose: boolean;
}

export default Header;


