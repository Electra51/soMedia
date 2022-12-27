import ErrorPage from "../../Components/Shared/ErrorPage";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home";

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
          }
      ]
    },
]);
  
export default router;