import React from 'react'
import Header from './Navbar/Header'
import Footer from './Footer/footer'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <div className="flex-col max-w-[100%]">
            {children}
        </div>
        <Footer/>
    </>
  )
}

export default Layout