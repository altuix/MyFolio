import React, { Children } from 'react'
import Navbar from '../components/common/navbar'
import { I_Children } from '../Interfaces/I_children'
import Footer from './Footer'

function Layout(props: I_Children) {
    return (
        <div className="flex w-full justify-center">
            <div className="flex justify-center relative">
                <div className="flex w-full  md:max-w-7xl relative">
                    <div className="w-full bg-white ring-1 ring-zinc-100 shadow-2xl">
                        {/* //dark:bg-zinc-900 dark:ring-zinc-300/20 */}
                        <Navbar />

                        <div className="pt-20 px-8 lg:pt-40 sm:px-12">
                            {props.children}
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
