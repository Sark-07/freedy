import MobileSidebar from '@/components/shared/MobileSidebar'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root flex sm:flex-row flex-col'>
      <Sidebar/>
      <MobileSidebar/>
      <div className="container">
        {children}
      </div>
    </main>
  )
}

export default Layout