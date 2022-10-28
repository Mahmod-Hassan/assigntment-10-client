import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Blogs/Blogs";
import CheckOut from "../../CheckOut/CheckOut";
import CourseDetails from "../../CourseDetails/CourseDetails";
import Courses from "../../Courses/Courses";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import NotFound from "../../NotFound/NotFound";
import Register from "../../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-server-kappa.vercel.app/courses')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://assignment-10-server-kappa.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://assignment-10-server-kappa.vercel.app/courses/${params.id}`)
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
                path: '/blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
            {
                path: '/course-checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-kappa.vercel.app/course-checkout/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])
