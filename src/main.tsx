import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import './index.css';
import PlaygroundSetter from './PlaygroundSetter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/playground/setter",
    element: <PlaygroundSetter />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
