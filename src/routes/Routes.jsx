import {
    Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import Layouts from "../Layouts/Layouts";

import Categories from "../Pages/Categories";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Regsiter";
const router =createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout/>,
        children:[
            {
                path:'/',
                element:<Navigate to='/category/0'> </Navigate>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'register',
                element:<Register/>
            }
        ]
    },
 {
    path:'category',
    element:<Layouts/>,
    children:[
       
        {
            path:':id',
            element:<Categories/>,
             loader: ({params})=> fetch(`http://localhost:7000/categories/${params.id}`)
        }
    ]
 },
 {
    path:'/news',
    element:<NewsLayout/>,
    children:[
        {
            path:':id',
            element:<News/>,
            loader:({params})=>fetch(`http://localhost:7000/news/${params.id}`)
        }
    ]
 }
])
export default router;

