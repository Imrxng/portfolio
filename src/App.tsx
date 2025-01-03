import { createBrowserRouter, createHashRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import PORTFOLIO from './pages/Portfolio'
import HEADER from './components/partials/Header'
import FOOTER from './components/partials/Footer'
import NOT_FOUND from './components/NotFound'
import CONTACT from './pages/Contact'


const ROOT = () => {
  return (
    <>
        <HEADER/>
          <Outlet/>
        <FOOTER/>
    </>
  );
};


function App() {
  
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


  return (
    <div>
      <RouterProvider router={ROUTER}/>
    </div>
  )
}

export default App
