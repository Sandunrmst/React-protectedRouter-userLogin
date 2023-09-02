
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import MainLayout from "../pages/Layout/MainLayout";
import Home from "../pages/Home/Home";
import User from "../pages/User/User";
import Login from "../pages/Login/Login";
import NotFound from "../pages/404/NotFound";
import Admin from "../pages/Admin/Admin";
import UserProtected from "./UserProtected";
import AdminProtected from "./AdminProtected";

const router = createBrowserRouter([
    {
      path:'/',
      element: <MainLayout />,
      children:[
        {
          index: true,
          element:<Home />
        },
        {
          element:<UserProtected/>,
          children:[
            {
              path:'profile',
              element:<User/>
            }
          ]
        }
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/404',
      element:<NotFound/>
    },
    {
      element:<AdminProtected />,
      children:[
        {
          path:'/admin',
          element:<Admin />
        }
      ]
    }
  ])
  
  const AppRouter = () => {
  
    return <RouterProvider router={router} />;
  
  }
  
  export default AppRouter