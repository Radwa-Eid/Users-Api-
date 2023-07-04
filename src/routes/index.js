import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Blog from "../pages/blog";
import UserData from "../components/UserData";
import Posts from "../pages/Posts";
import Todos from "../pages/Todos";
import Update from "../components/Update";
export const RootRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "users/:id",
        element: <UserData />,
      },
      {
        path: "users/:id/posts",
        element: <Posts />,
      },
      {
        path: "users/:id/todos",
        element: <Todos />,
      },
      {
        path: "users/:id/update",
        element: <Update />,
      },
    ],
  },
];
