import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Root/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import InsideHome from './components/InsideHome/InsideHome.jsx';
import Hudai from './components/Hudai/Hudai.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root> ,

    children:[

      {
        path:"/",
        element:<Home> <InsideHome> </InsideHome> </Home>,


        


      },
      {
        path:'/login',
        element: <Login> </Login>
      },
      {
        path:'/register',
        element: <Register> </Register>
      },
      {
        path: '/hudai',
        element: <Hudai> </Hudai>
      }



    ]
  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <AuthProvider> 
        <RouterProvider router={router} />
         </AuthProvider>
  </StrictMode>,
)
