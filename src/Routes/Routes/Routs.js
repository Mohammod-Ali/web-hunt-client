import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import NotFound from "../../Pages/NotFound/NotFound";
import Premium from "../../Pages/Premium/Premium";
import CourseCart from "../../Pages/Shared/CourseCart/CourseCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: ( ) => fetch('http://localhost:5000/courses'),
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: ( ) => fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                element: <CourseCart></CourseCart>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/premium/:id',
                element: <PrivateRoute>
                    <Premium></Premium>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/faq',
                element: < FAQ></FAQ>
            },
            {
                path: '/blogs',
                loader: () => fetch('http://localhost:5000/blogs'),
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
        
            }
        ]
    }
])