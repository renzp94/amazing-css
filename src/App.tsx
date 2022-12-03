import { createHashRouter, RouterProvider } from 'react-router-dom'
import { routes } from '@/router'
import { themeState, useAtom } from '@/store'

function App() {
  const [theme] = useAtom(themeState)
  const router = createHashRouter(routes)

  return (
    <div className={`theme-${theme}`}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
