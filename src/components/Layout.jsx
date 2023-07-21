import React from 'react'
import Header from './Navbar/Header'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <div className="flex-col max-w-[100%]">
            {children}
        </div>
    </>
  )
}

export default Layout