import React from 'react'
import './insurance.js'
import Layout from '../pages/Layout.jsx'
import { bajajLogo } from '../assets/index.js'

const Partner = () => {
  return (
    <Layout>
    <div className='m-10 rounded-lg shadow-[0_4px_9px_-4px_#3b71ca] bg-[#0072bc]'>
    <div className='flex justify-center pt-8 pb-1 items-center'>
      <img src={bajajLogo} alt="Logo" />
    </div>
    <div id="insurance"></div>
    </div>
    </Layout>
  )
}

export default Partner