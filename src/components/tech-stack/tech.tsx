import React from 'react'

interface I_Tech {
    src: string
}

function Tech(props: I_Tech) {
    return (
        <div className="group relative  w-2/12 h-20 p-1 rounded-full shadow-md shadow-black grayscale cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:grayscale-0 hover:z-50 ">
            <span className="w-full h-0 rounded-full bg-black opacity-95 absolute bottom-0 left-0 duration-300 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-black transition-colors duration-200 ease-in-out group-hover:text-white z-10">
            <img
                className="relative w-full h-full p-2 rounded-3xl transition-all duration-200 z-50 group-hover:invert  group-hover:scale-110 "
                src={props.src}
            />
            </span>
          
        </div>
    )
}

export default Tech
