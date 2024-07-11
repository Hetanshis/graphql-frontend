import Home from "./components/home";
import Login from "./components/login";

import Register from "./components/register";

export const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
];
