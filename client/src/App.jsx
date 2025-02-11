import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Cupom from "./pages/Cupom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cadastro/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/cupom",
    element: <Cupom/>
  }
])

export function App() {

  return (
    <RouterProvider router={router} />
  )
}