import { createHashRouter, RouterProvider } from 'react-router-dom'
import { routes } from '@/router'

function App() {
  const router = createHashRouter(routes)
  return <RouterProvider router={router} />
}

export default App
