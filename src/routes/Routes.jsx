import {
    createBrowserRouter,
  } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import Categories from "../Pages/Categories";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News";
const router =createBrowserRouter([
 {
    path:'/',
    element:<Layouts/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/category/:id',
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

