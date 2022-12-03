import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import LazyLoadSpin from '@/components/LazySpin'
const Home = lazy(() => import('@/pages/Home'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <LazyLoadSpin>
        <Home />
      </LazyLoadSpin>
    ),
  },
]

export default routes
