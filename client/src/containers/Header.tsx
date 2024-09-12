import { Navbar, Logo, Login, MobileMenu } from "../components";
import { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import styled from '@emotion/styled';
import tw from 'twin.macro';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrollingTop, setScrollingTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      console.log('Scroll Top:', scrollTop);
      setScrollingTop(scrollTop > 0);
      
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  console.log(isScrollingTop);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header_Container className="header_container" isScrolled={isScrollingTop}>
      <Logo_Container className="logo_container justify-center mr-6">
        <Logo />
      </Logo_Container>
      <RightSide_Components className="right-side_components">
        <Navbar isScrolled={isScrollingTop} />
        <Login />
        <HamburgerMenu_Items>
          <HamburgerMenu_Button isClose={isOpen} onClick={toggleMenu}>
            {isOpen 
              ? <RiCloseLine size={24} /> 
              : <RiMenuLine size={24} />}
          </HamburgerMenu_Button>
          <HamburgerMenu_Container className={`${isScrollingTop ? "" : "pt-1"}`} isClose={isOpen}>
            <Logo_Container className={`justify-start mb-4 h-12 ${isOpen ? "delay-300 duration-500 opacity-100" : "duration-200 opacity-0"}`}>
              <Logo />
            </Logo_Container>
            <MobileMenu isClose={isOpen}/>
          </HamburgerMenu_Container>
        </HamburgerMenu_Items>
      </RightSide_Components>
    </Header_Container>
  );
};

const Header_Container = styled.div<HeaderProps>(({ isScrolled }) => [
  tw` 
    // Container
    fixed 
    flex 
    flex-row
    justify-center
    items-center

    top-0
    left-0
    z-50 

    w-full
    h-16
    px-5

    // Animation
    transition-all 
    duration-300
    ease-in-out  
    
    // Background
    before:absolute 
    before:[content: ""]
    before:top-0
    before:left-0
    before:w-full 
    before:h-full 
    before:z-[-1] 
    between-sm-md:md:before:bg-[rgba(161,118,218,.5)] 
    between-sm-md:backdrop-blur-[20px]
  `,
  
  // Responsive 
  tw`xl:min-w-[320px]`,

  // Height 
  isScrolled ? tw`h-12 sm:h-12` : tw`h-16 sm:h-14`,
]);


const RightSide_Components = tw.div`
  // Container
  flex 
  flex-row 
  items-center
  justify-end
  flex-1
  h-full

  // Responsive
  lg:justify-between
  ml-10
`;


const HamburgerMenu_Items = tw.div`
  // Container
  flex
  flex-row 
  items-center
  lg:hidden
  
  // Responsive
  ml-3
`;

const HamburgerMenu_Button = styled.button<NavbarMenuProps>(({ isClose }) => [
  tw`
    // Container
    text-white

    flex 
    items-center 
    justify-center
    // Animation
    transition-transform 
    duration-300
    ease-in-out 

    z-50
  `,
  // State-based animation
  isClose && tw`rotate-90`
]);


const HamburgerMenu_Container = styled.div<NavbarMenuProps>(({ isClose }) => [
  tw`
    // Container
    text-white 
    absolute 
    justify-center
    items-center
    
    top-0 
    right-0
    h-screen
    
    // Background
    bg-[rgba(161,118,218,.40)!important]

    // Animation
    transition-all 
    duration-300
    ease-in-out

    z-30
  `,
  // Responsive 
  isClose 
    ? tw`w-full backdrop-blur-[50px] px-5 ` 
    : tw`w-0 backdrop-blur-none`,
]);


const Logo_Container = tw.div` 
  // Container
  flex 
  items-center

  // Background
  border-none
`;


interface HeaderProps {
  isScrolled: boolean;
}

interface NavbarMenuProps {
  isClose: boolean;
}

export default Header;
