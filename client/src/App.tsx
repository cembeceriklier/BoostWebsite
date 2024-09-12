import tw from "twin.macro"
import { 
  Homepage, ContactUs,
  Coaching, Marketplace,
  NotFound, Valorant, LeagueofLegends
}
  from "./pages";
import { Header, Footer } from "./containers";
import 
{
  createBrowserRouter,
  createRoutesFromElements,
  Route, Outlet, RouterProvider
}
from 'react-router-dom';
import { useEffect } from "react";

const Root = () => {
  // useEffect(() => {
  //   const adjustHeight = () => {
  //     document.body.style.minHeight = `${window.innerHeight}px`;
  //   };
  
  //   // Pencere boyutu değiştiğinde yüksekliği ayarla
  //   window.addEventListener('resize', adjustHeight);
  
  //   // İlk render sonrası yüksekliği ayarla
  //   adjustHeight();
  
  //   return () => window.removeEventListener('resize', adjustHeight);
  // }, []);

  return (
    <AppContainer className="xl:min-w-[320px]  ">
      <div>
        <Header/>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer/>
      </div>
    </AppContainer>
  )
}

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Homepage />} />
        <Route path='/Boosting-LOL-services' element={<LeagueofLegends/>} />
        <Route path='/Boosting-Valorant-services' element={<Valorant/>} />
        <Route path='/Coaching-services' element={<Coaching/>} />
        <Route path='/Marketplace' element={<Marketplace/>} />
        <Route path='/Contact-us' element={<ContactUs/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;

const AppContainer = tw.div`

`
