import { Suspense } from 'react'
import Spin from '../Spin'

const LazySpin = ({ children }: { children: React.ReactElement }) => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <Spin />
        </div>
      }
    >
      {children}
    </Suspense>
  )
}

export default LazySpin
