import tw from "twin.macro";
const Tft = () => {
  return (
    <TFTBoostingContainer>
      <div>TFT</div>
    </TFTBoostingContainer>
  )
}

export default Tft

const TFTBoostingContainer = tw.div`
  bg-hero h-screen
`