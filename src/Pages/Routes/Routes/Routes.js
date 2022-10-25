import { createBrowserRouter } from "react-router-dom";
import Courses from "../../Courses/Courses";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
        ]
    }
])
