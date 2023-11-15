import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Layouts/Main";
import Topics from "./components/Topics/Topics";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <About></About>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        { path: "/statistics", element: <Statistics></Statistics> },
        { path: "/about", element: <About></About> },
        { path: "/blog", element: <Blog></Blog> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
