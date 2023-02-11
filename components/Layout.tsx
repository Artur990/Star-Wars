import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
)

export default Layout
