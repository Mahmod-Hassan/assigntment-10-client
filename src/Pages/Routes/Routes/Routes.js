import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../../CourseDetails/CourseDetails";
import Courses from "../../Courses/Courses";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";


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
            }
        ]
    }
])
