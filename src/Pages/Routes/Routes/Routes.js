import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../../CheckOut/CheckOut";
import CourseDetails from "../../CourseDetails/CourseDetails";
import Courses from "../../Courses/Courses";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
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
                path: '/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }
        ]
    }
])
