import tw from "twin.macro";
import { AboutUs, Hero, Brand } from "../components";
import { IntersectionObserver } from "../hooks";
import { Footer } from "../containers";

const Homepage = () => {
  const heroObserver = IntersectionObserver({ threshold: 0.1 });
  const brandObserver = IntersectionObserver({ threshold: 0.1 });
  const aboutUsObserver = IntersectionObserver({ threshold: 0.1 });

  return (
    <HomePageContainer>
      <div ref={heroObserver.ref}>
        {heroObserver.isVisible && <Hero />}
      </div>

      <div ref={brandObserver.ref}>
        {brandObserver.isVisible && <Brand />}
      </div>

      <div ref={aboutUsObserver.ref}>
        {aboutUsObserver.isVisible && <AboutUs />}
      </div>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </HomePageContainer>
  );
};

export default Homepage;

const HomePageContainer = tw.div`
  relative
  w-full
  min-h-screen
  flex
  flex-col
`;

const FooterContainer = tw.div`
  mt-auto
`;
