import tw from "twin.macro"
import { Hero } from "../components"
const Homepage = () => {
  return (
    <HomePageContainer>
      <Hero/>
    </HomePageContainer>
  )
}

export default Homepage

const HomePageContainer = tw.div`
  relative
  w-screen
  overflow-hidden
  
  bg-hero 
  h-screen
  
  bg-no-repeat
  bg-center
  bg-cover
  
  pt-20
`;

