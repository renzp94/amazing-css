import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <section>
      <Header />
      <main className="layout-main">
        <Outlet />
      </main>
    </section>
  )
}

export default Layout
