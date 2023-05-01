import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
const router =createBrowserRouter([
 {
    path:'/',
    element:<Layouts/>,
    children:[
        {
            path:'/',
            element:<Home/>
        }
    ]
 }
])
export default router;

