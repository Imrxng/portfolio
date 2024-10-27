import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import PORTFOLIO from './pages/Portfolio'
import { DataContext } from './context/DataContext'
import HEADER from './components/partials/Header'
import FOOTER from './components/partials/Footer'
import NOT_FOUND from './components/NotFound'
import CONTACT from './pages/Contact'
import PORTFOLIO_EN from './pages_en/Portfolio_en'
import CONTACT_EN from './pages_en/Contact_en'
import { useContext } from 'react'
import HEADER_EN from './components_en/partials/Header_en'
import FOOTER_EN from './components_en/partials/Footer_en'


const ROOT = () => {
  return (
    <>
        <HEADER/>
          <Outlet/>
        <FOOTER/>
    </>
  );
};

const ROOT_EN = () => {
  return (
    <>
        <HEADER_EN/>
          <Outlet/>
        <FOOTER_EN/>
    </>
  );
};

function App() {
  
  const { LANGUAGE } = useContext(DataContext);

  const ROUTER = createBrowserRouter([
    {
      path: "/portfolio",
      element: <ROOT/>,
      children: [
        {
          path: "",
          element: <PORTFOLIO/>
        },
        {
          path: "/portfolio/contact",
          element: <CONTACT/>
        },
        {
          path: '*',
          element: <NOT_FOUND/>
        }
      ]
    }
  ]);

  const ROUTER_EN = createBrowserRouter([
    {
      path: "/portfolio",
      element: <ROOT_EN/>,
      children: [
        {
          path: "",
          element: <PORTFOLIO_EN/>
        },
        {
          path: "/portfolio/contact",
          element: <CONTACT_EN/>
        },
        {
          path: '*',
          element: <NOT_FOUND/>
        }
      ]
    }
  ]);


  return (
    <div>
      <RouterProvider router={LANGUAGE === "nl" ? ROUTER : ROUTER_EN}/>
    </div>
  )
}

export default App
