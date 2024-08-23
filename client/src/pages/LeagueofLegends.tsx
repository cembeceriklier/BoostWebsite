import tw from "twin.macro";
const leagueoflegends = () => {
  return (
    <LeagueofLegendsBoostingContainer>
      <div>LeagueofLegends</div>
    </LeagueofLegendsBoostingContainer>
  )
}

export default leagueoflegends

// eslint-disable-next-line react-refresh/only-export-components
const LeagueofLegendsBoostingContainer = tw.div`
  bg-hero h-screen
`