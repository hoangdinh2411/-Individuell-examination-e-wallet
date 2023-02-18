import { createBrowserRouter } from 'react-router-dom'
import AddCardPage from '../pages/AddCard'
import HomePage from '../pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/add-card',
    element: <AddCardPage />,
  },
])

export default router
