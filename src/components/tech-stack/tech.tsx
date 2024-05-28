import React from 'react'

interface I_Tech {
  src: string
}

function Tech(props: I_Tech) {
  return (
    <div className='group relative  h-20 w-2/12 cursor-pointer rounded-full p-1 shadow-md shadow-black grayscale transition-all duration-300 ease-in-out hover:z-50 hover:scale-110 hover:grayscale-0 '>
      <span className='-z-1 absolute bottom-0 left-0 h-0 w-full rounded-full bg-black opacity-95 transition-all duration-300 group-hover:h-full group-hover:w-full'></span>
      <span className='z-10 w-full text-black transition-colors duration-200 ease-in-out group-hover:text-white'>
        <img
          className='relative z-50 h-full w-full rounded-3xl p-2 transition-all duration-200 group-hover:scale-110  group-hover:invert '
          src={props.src}
        />
      </span>
    </div>
  )
}

export default Tech
