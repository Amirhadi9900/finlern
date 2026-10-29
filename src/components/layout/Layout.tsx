import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../ScrollToTop'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50 overflow-x-clip">
      <Header />
      <main className="flex-grow overflow-x-clip">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout 