import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//importando react router para usar rotas
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";

//react router dom - criar rotas
const router = createBrowserRouter([
  {
    //quando acessa / vai para a página inicial (App.jsx)
    path: "/",
    element: <App />,
  },
  {
    //quando acessa /task vai para TaskPage
    path: "/task",
    element: <TaskPage />,
  },
]);

// renderiza a aplicação React dentro do elemento "root"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
