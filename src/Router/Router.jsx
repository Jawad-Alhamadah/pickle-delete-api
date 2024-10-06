import React from 'react'
import Add from '../Pages/Add';
import Home from '../Pages/Home';
import Update from "../Pages/Update"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
const router = createBrowserRouter([
  {

    path: "",
    element: <Home />,

  },
  , {
    path: "/add",
    element: <Add/>
  },
  {
      path:"/update/:id/:name",
      element:<Update></Update>

  }
]);
function Router() {

  return (
    <RouterProvider router={router} />
  )
}
export default Router
