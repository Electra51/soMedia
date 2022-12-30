import ErrorPage from "../../Components/Shared/ErrorPage";
import Main from "../../Layouts/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Media from "../../Pages/Media/Media";
import PostDetails from "../../Pages/Media/PostDetails";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/home',
                element:<Home></Home>
            },
            {
                path: '/media',
                element: <Media></Media>,
                loader: ()=> fetch('http://localhost:5000/myPosts')
            },
            {
                path: '/media/:id',
                element: <PostDetails></PostDetails>,
                loader:({params})=>fetch(`http://localhost:5000/myPosts/${params.id}`)
                
            },
            // {
            //     path: '/media/:commentId',
            //     element: <PostDetailsHalf></PostDetailsH>,
            //     loader:({params})=>fetch(`http://localhost:5000/comments/${params.id}`)
                
            // },
            {
                path: '/about',
                element: <PrivateRoute><About></About></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/aboutMe/${params.email}`)
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<Signup></Signup>
            },
      ]
    },
]);
  
export default router;