import { createBrowserRouter } from "react-router-dom";
import dynamic from 'next/dynamic';

const Login = dynamic(() => import('../components/login/Login'));

const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
]);

export default router;