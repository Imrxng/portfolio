import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import PORTFOLIO from './pages/Portfolio'
import { DataProvider } from './context/DataContext'
import HEADER from './components/partials/Header'
import FOOTER from './components/partials/Footer'
import NOT_FOUND from './components/NotFound'
import CONTACT from './pages/Contact'


const ROOT = () => {
    return (
      <>
        <DataProvider>
          <HEADER/>
          <Outlet/>
          <FOOTER/>
        </DataProvider>
      </>
    );
};

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ROOT/>,
      children: [
        {
          path: "",
          element: <PORTFOLIO/>
        },
        {
          path: "/contact",
          element: <CONTACT/>
        },
        {
          path: '*',
          element: <NOT_FOUND/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
