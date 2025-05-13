import Browse from './Browse.js';
import Login from './Login.js';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Body = () => {

    // The createBrowserRouter function is used to create a router object that can be used to manage the navigation of your application.
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:<Login />
        },
        {
            path: "/browse",
            element:<Browse />
        }
    ]);
    
    return(
        // The RouterProvider component is used to provide the router object to your application. It is used to manage the navigation of your application.
    <div>
        <RouterProvider router={appRouter} />
    </div>
)
}

export default Body;