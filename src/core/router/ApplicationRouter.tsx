import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "../../presentation/pages/home/HomePage.tsx";

export const ApplicationRouter = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>,
        }
    ]);

    return (
        <RouterProvider router={router}/>
    );
};
