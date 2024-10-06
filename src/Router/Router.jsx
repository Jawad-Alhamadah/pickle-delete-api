import React from 'react'
import Add from '../Pages/Add';
import Home from '../Pages/Home';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
const router = createBrowserRouter([
  {

    path: "",
    element: <Home />,

  },
  , {
    path: "/add",
    element: <Add/>
  }
]);
function Router() {

  return (
    <RouterProvider router={router} />
  )
}
export default Router
