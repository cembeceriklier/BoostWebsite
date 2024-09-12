import tw from "twin.macro";
import { useState, useEffect } from "react";
import styled from '@emotion/styled';
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [visibleItems, setVisibleItems] = useState<number>(3);

  const [isHoveredLol, setIsHoveredLol] = useState<boolean>(false);
  const [isHoveredValorant, setIsHoveredValorant] = useState<boolean>(false);
  const [isHoveredTft, setIsHoveredTft] = useState<boolean>(false);
  const [isHoveredOther, setIsHoveredOther] = useState<boolean>(false);
  
  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
  
      if (innerWidth < 940) {
        setVisibleItems(0);
      } else if (innerWidth < 1050) {
        setVisibleItems(1);
      } else if (innerWidth < 1150) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };
  
    handleResize();
  
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <NavContainer className="nav_container">
      <Nav className="nav">
        <Ref className={"ref group"} to={"/"}>
          <NavText className="nav-text">
            HOMEPAGE 
          </NavText>
          <LinkLine className="link-line"/>
        </Ref>
      </Nav>
      <Nav className="">
        <NavDiv onMouseEnter={() => setIsHoveredLol(true)} onMouseLeave={() => setIsHoveredLol(false)}>
          <Ref to={"/Boosting-LOL-services"}>
            <NavText className={`${isHoveredLol ? 'text-[#dfdee0]' : ''}`} >
              LOL
              <DropdownSvg className={`${isHoveredLol ? '!fill-[#371f4f] transition-all duration-500 ease-in-out translate-y-[1px]' : 'duration-300 ease-in-out'}`} xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 320 512">
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
              </DropdownSvg>
            </NavText>
          </Ref>
          <SubMenu_Lol_Container className={`nav-item ${isHoveredLol ? 'visible h-[359px] z-50 duration-300 ease-in-out;' : 'invisible opacity-0 z-40 h-0 duration-300 ease-in-out'} `} isHoveredLol={isHoveredLol} isScrolled={isScrolled}>
            <RedLine className={`${isHoveredLol ? 'w-full transition-all ease-out duration-300' : 'transition-all w-5 duration-300 ease-in-out opacity-0'}`} />
            <SubLink_Container className={`${isHoveredLol ? 'translate-y-2 duration-500' : 'duration-300'} `} >
              <SubLink className="!mt-4">
                <SubRef className={`${isHoveredLol ? '[transition-delay:95ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/"} >Division Boosting</SubRef>
              </SubLink>
              <SubLink>
                <SubRef className={`${isHoveredLol ? '[transition-delay:135ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/"}>Placement Matches</SubRef>
              </SubLink>
              <SubLink>
                <SubRef className={`${isHoveredLol ? '[transition-delay:175ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/"}>Duo Games</SubRef>
              </SubLink>
              <SubLink>
                <SubRef className={`${isHoveredLol ? '[transition-delay:215ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/"}>Win Boosting</SubRef>
              </SubLink>
              <SubLink>
                <SubRef className={`${isHoveredLol ? '[transition-delay:255ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/"}>Champion Mastery</SubRef>
              </SubLink>
              <SubLink>
                <SubRef className={`${isHoveredLol ? '[transition-delay:295ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/"}>Level Boost</SubRef>
              </SubLink>
              <SubLink className="!mb-6">
                <SubRef className={`${isHoveredLol ? '[transition-delay:330ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/"}>Challenger & Radiant</SubRef>
              </SubLink>
            </SubLink_Container>
          </SubMenu_Lol_Container>
        </NavDiv>
      </Nav>
      <Nav>
        <NavDiv onMouseEnter={() => setIsHoveredValorant(true)} onMouseLeave={() => setIsHoveredValorant(false)}>
          <Ref to={"/Boosting-valorant-services"}>
            <NavText className={`${isHoveredValorant ? 'text-[#dfdee0]' : ''}`}>
              VALORANT
              <DropdownSvg className={`${isHoveredValorant ? '!fill-[#371f4f] transition-all duration-500 ease-in-out translate-y-[1px]' : 'duration-300 ease-in-out'}`} xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 320 512">
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
              </DropdownSvg>   
            </NavText>
          </Ref>
          <SubMenu_Valorant_Container className={`nav-item ${isHoveredValorant ? 'visible h-[224px] z-50 duration-300 ease-in-out;' : 'invisible opacity-0 z-40 h-0 duration-300 ease-in-out'} `} isHoveredValorant={isHoveredValorant} isScrolled={isScrolled}>
                  <RedLine className={`${isHoveredValorant ? 'w-full transition-all ease-out duration-300' : 'transition-all w-5 duration-300 ease-in-out opacity-0'}`} />
                  <SubLink_Container className={`${isHoveredValorant ? 'translate-y-2 duration-500' : 'duration-300'} `} >
                    <SubLink className="!mt-4">
                      <SubRef className={`${isHoveredValorant ? '[transition-delay:95ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/"} >Placement Matches</SubRef>
                    </SubLink>
                    <SubLink>
                      <SubRef className={`${isHoveredValorant ? '[transition-delay:135ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/"} >Net Wins</SubRef>
                    </SubLink>
                    <SubLink>
                      <SubRef className={`${isHoveredValorant ? '[transition-delay:175ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/"}>Duo Games</SubRef>
                    </SubLink>
                    <SubLink className="!mb-6">
                      <SubRef className={`${isHoveredValorant ? '[transition-delay:215ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/"}>Unrated Wins</SubRef>
                    </SubLink>
                  </SubLink_Container>
                </SubMenu_Valorant_Container>
        </NavDiv>
      </Nav>
      <Nav>
        <NavDiv onMouseEnter={() => setIsHoveredTft(true)} onMouseLeave={() => setIsHoveredTft(false)}>
          <Ref to={"/Boosting-TFT-services"}>
            <NavText className={`${isHoveredTft ? 'text-[#dfdee0]' : ''}`}>TFT
              <DropdownSvg className={`${isHoveredTft ? '!fill-[#371f4f] transition-all duration-500 ease-in-out translate-y-[1px]' : 'duration-300 ease-in-out'}`} xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 320 512">
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
              </DropdownSvg> 
            </NavText>
          </Ref>
          <SubMenu_Tft_Container className={`nav-item ${isHoveredTft ? 'visible h-[179px] z-50 duration-300 ease-in-out;' : 'invisible opacity-0 z-40 h-0 duration-300 ease-in-out'} `} isHoveredTft={isHoveredTft} isScrolled={isScrolled}>
                  <RedLine className={`${isHoveredTft ? 'w-full transition-all ease-out duration-300' : 'transition-all w-5 duration-300 ease-in-out opacity-0'}`}/>
                  <SubLink_Container className={`${isHoveredTft ? 'translate-y-2 duration-500' : 'duration-300'} `} >
                    <SubLink className="!mt-4">
                      <SubRef className={`${isHoveredTft ? '[transition-delay:95ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/"} >Placement Matches</SubRef>
                    </SubLink>
                    <SubLink>
                      <SubRef className={`${isHoveredTft ? '[transition-delay:135ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/"}>Net Wins</SubRef>
                    </SubLink>
                    <SubLink className="!mb-6">
                      <SubRef className={`${isHoveredTft ? '[transition-delay:175ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/"}>Normal Wins</SubRef>
                    </SubLink>
                  </SubLink_Container>
                </SubMenu_Tft_Container>
        </NavDiv>
      </Nav>
      {visibleItems >= 1 && (
      <Nav>
        <Ref className={"group "} to={"/Marketplace"}>
          <NavText>MARKET</NavText>
          <LinkLine className=""/>
        </Ref>
      </Nav>
      )} 
      {visibleItems >= 2 && (
      <Nav>
        <Ref className={"group"} to={"/Coaching-services"}>
        <NavText>COACHING</NavText>
          <LinkLine className=""/> 
        </Ref>
      </Nav>
      )}
      {visibleItems === 3 && (
      <Nav>
        <Ref className={"group"} to={"/Contact-us"}>
          <NavText>CONTACT</NavText>
          <LinkLine className=""/>
        </Ref>
      </Nav>
      )} 
      {visibleItems < 3 && (
      <Nav className="cursor-pointer">
        <NavDiv onMouseEnter={() => setIsHoveredOther(true)} onMouseLeave={() => setIsHoveredOther(false)}>
          <Ref to={"/Boosting-TFT-services"}> 
            <NavText>
              OTHER
              <DropdownSvg className={`${isHoveredOther ? 'transition-all duration-300 ease-in-out translate-y-[1px]' : 'duration-300 ease-in-out'}`} xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 320 512">
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
              </DropdownSvg>
            </NavText>
          </Ref> 
          <SubMenu_Other visibleItems={visibleItems} isScrolled={isScrolled} isHoveredOther={isHoveredOther}>
                <RedLine className={`${isHoveredOther ? 'w-full transition-all ease-out duration-300 !mb-4' : 'transition-all w-1 duration-300 ease-in-out opacity-0'}`} /> 
                <SubLink_Container className={`${isHoveredOther ? 'translate-y-2 duration-500' : 'duration-300'} `} >
                  {visibleItems < 3 && (
                  <SubLink>
                    <SubRef className={`${isHoveredOther ? '[transition-delay:95ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/Contact-us"} >Contact</SubRef>
                  </SubLink>
                  )}
                  {visibleItems < 2 && (
                  <SubLink>
                    <SubRef className={`${isHoveredOther ? '[transition-delay:135ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/Coaching-services"} >Coaching</SubRef>
                  </SubLink>
                  )}
                  {visibleItems < 1 && (
                  <SubLink>
                    <SubRef className={`${isHoveredOther ? '[transition-delay:175ms] duration-[400ms] opacity-100 ease-out' : 'opacity-0 duration-300'} `} to={"/Marketplace"} >Market</SubRef>
                  </SubLink>
                  )}
                </SubLink_Container>
          </SubMenu_Other>      
        </NavDiv>
      </Nav>
      )} 
    </NavContainer>
  );
}

const NavContainer = tw.nav`
  hidden
  items-center
  justify-center
  lg:flex

  mr-5
  p-0
  
  text-sm
  font-medium
  no-underline
  z-30

  [font-weight: 300]
`;

const Nav = tw.div`
  inline-flex
  relative
  
  top-0
  left-0
  h-full
`;

const NavDiv = tw.div`
  flex
  items-center
  justify-center

`

const Ref = tw(NavLink)` 
  flex
  justify-center
  items-center
  flex-col

  h-16
  m-auto
  p-0
  
  text-white

  cursor-pointer
  hover:h-16
`;

const NavText = tw.span`
  flex
  items-center
  justify-center

  transition-all
  ease-in-out
  duration-300

  px-3
  py-0.5  

  group-hover:text-[#dfdee0]
`;

const DropdownSvg = tw.svg`
  relative
  top-0
  left-0

  mb-1
  ml-1
  h-full

  fill-white
`;

const SubMenu_Lol_Container = styled.ul<LolProps>(({ isScrolled }) => [
  tw`
    absolute

    top-[52px]
    left-0
    [min-width: 15rem]

    overflow-hidden
    cursor-default 

    shadow-lg
    bg-[rgba(0,0,0,.15)]
    [backdrop-filter: blur(50px)]

    border-2
    rounded-br-3xl
    border-double
    border-t-0
    `,
  isScrolled && tw``,
  {

    WebkitBackdropFilter: 'blur(50px) !important',  // For Safari support
    backdropFilter: 'blur(50px) !important',
  },
])

const SubMenu_Valorant_Container = styled.ul<ValorantProps>(({ isScrolled }) => [
  tw`
    absolute

    top-[52px]
    left-0
    [min-width: 15rem]

    overflow-hidden
    cursor-default 

    shadow-lg
    bg-[rgba(0,0,0,.15)]
    backdrop-blur-[50px]
    border-2
    rounded-br-3xl
    border-t-0
    `,
  isScrolled && tw``
])

const SubMenu_Tft_Container = styled.ul<TftProps>(({ isScrolled }) => [
  tw`
    absolute

    top-[52px]
    left-0
    [min-width: 15rem]

    overflow-hidden
    cursor-default 

    shadow-lg
    bg-[rgba(0,0,0,.15)]
    backdrop-blur-[50px]

    border-2
    rounded-br-3xl
    border-t-0
    `,
  isScrolled && tw``
])

const SubMenu_Other = styled.ul<SubMenuOtherProps & { visibleItems: number }>(
  ({ isScrolled, visibleItems, isHoveredOther }) => [
    tw`
      absolute
      
      top-[52px]
      left-0
      [min-width: 10rem]

      overflow-hidden
      cursor-default

      shadow-lg
      bg-[rgba(0,0,0,.15)]
      backdrop-blur-[50px]
      
      duration-300
      ease-in-out
      invisible z-40 h-0

      border-2
      rounded-br-3xl
      border-t-0
    `,
    isScrolled && tw``,
    isHoveredOther ? tw`visible z-50` : tw`opacity-0 ease-in-out`, //  hover 
    visibleItems === 2 && isHoveredOther && tw`h-[89px]`, // 2 öğe 
    visibleItems === 1 && isHoveredOther && tw`h-[134px]`, // 1 öğe 
    visibleItems === 0 && isHoveredOther && tw`h-[179px]`, // 0 öğe 
  ]
);
    
const LinkLine = tw.div`
  bg-white
  invisible 
  absolute 
  
  h-[2px]
  mb-[2px]
  bottom-2 
  
  w-0
  group-hover:visible
  group-hover:w-[70%]
  group-hover:opacity-100

  opacity-0

  transition-all
  ease-in-out
  duration-300

`;

const RedLine = tw.div`
  h-[2px]
  mb-[2px]

  bg-white
  hover:bg-white
`;

const SubLink_Container = tw.div`

`

const SubLink = tw.li`
  text-sm
  font-medium
  no-underline
  
  my-2
  px-2
  py-2

  text-white

  hover:bg-[rgba(0,0,0,.05)]
  hover:backdrop-blur-[50px]

  cursor-pointer
`;

const SubRef = tw(Link)` 
  w-full
  h-full

  px-1.5
`;

interface NavbarProps {
  isScrolled: boolean;
}

interface SubMenuOtherProps {
  isScrolled: boolean;
  isHoveredOther: boolean;
}

interface LolProps {
  isScrolled: boolean;
  isHoveredLol: boolean;
}
interface ValorantProps {
  isScrolled: boolean;
  isHoveredValorant: boolean;
}
interface TftProps {
  isScrolled: boolean;
  isHoveredTft: boolean;
}

export default Navbar;
