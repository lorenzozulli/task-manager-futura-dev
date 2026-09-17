import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import TaskForm from './pages/Home/components/TaskForm/TaskForm.tsx'
import { NotFoundPage } from './shared/components/index.ts'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home/Home.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/new",
        element: <TaskForm />,
      },
      {
        path: "/edit/:id",
        element: <TaskForm />,
      }
    ],
  },
],);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
