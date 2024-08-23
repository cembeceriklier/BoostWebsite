import tw from "twin.macro";
const NotFound = () => {
  return (
    <NotFoundContainer>
      <div>NotFound</div>
    </NotFoundContainer>
  )
}

export default NotFound

const NotFoundContainer = tw.div`
  bg-hero h-screen
`;