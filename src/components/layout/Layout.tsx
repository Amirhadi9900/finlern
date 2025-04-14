import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../ScrollToTop'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50 overflow-x-hidden">
      <Header />
      <main className="flex-grow overflow-x-hidden">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout 