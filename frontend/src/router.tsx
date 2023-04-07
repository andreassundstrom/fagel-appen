import Faglar from './routes/faglar'
import Home from './routes/home'
import Layout from './routes/layout'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'faglar',
        element: <Faglar />
      }
    ]
  }
])

export default router
