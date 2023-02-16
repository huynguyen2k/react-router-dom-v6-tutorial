import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <Root />,
    errorElement: <ErrorPage />,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        loader: contactLoader,
        element: <Contact />,
      },
      {
        path: "contacts/:contactId/edit",
        loader: contactLoader,
        element: <EditContact />,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        errorElement: <div>Delete failed!</div>,
        action: destroyAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
