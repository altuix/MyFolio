import React, { Children } from 'react'
import Navbar from '../components/common/navbar'
import { I_Children } from '../Interfaces/I_children'
import Footer from './Footer'

function Layout(props: I_Children) {
  return (
    <div className='flex w-full  justify-center '>
      <div className='relative flex justify-center '>
        <div className='relative flex  w-full md:max-w-7xl '>
          <div className='flex h-[100%] w-full flex-col bg-white shadow-2xl ring-1 ring-zinc-100  lg:w-[100vw] lg:h-[100vh]'>
            <Navbar />

            <div className='mb-8 px-8 pt-20 sm:px-12 lg:pt-40'>{props.children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
