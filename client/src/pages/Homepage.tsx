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
  w-full
  overflow-hidden
  
  bg-hero 
  h-screen
  
  bg-no-repeat
  bg-center
  bg-cover
  
  pt-16
  // backdrop-brightness-50
`;

