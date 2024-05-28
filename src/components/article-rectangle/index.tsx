import React from 'react'
import './style.css'

function ArticleRectangle() {
  return (
    <div className='all-articles-article box-border w-full cursor-pointer overflow-hidden'>
      <div className='article group h-full rounded-md font-primary opacity-70 mix-blend-normal duration-300 hover:scale-105 hover:bg-[#fafafa] hover:opacity-100  hover:ease-in-out'>
        <a>
          <div className='article-container flex flex-col gap-2 p-7'>
            <div className='mb-3 text-sm text-gray-400'>| 7 May 2023</div>
            <div className='article-title font-primary text-lg font-bold'>The Benefits of Cloud Computing</div>
            <div className='article-description text-sm text-secondary'>
              Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why
              more businesses are turning to the cloud.
            </div>
            <div className='article-link mt-auto flex gap-5'>
              <div className='article-link-text text-green-400'>Read Article</div>
              <div className='article-link-icon'>
                <i className='fa-solid fa-greater-than text-green-400'></i>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default ArticleRectangle
