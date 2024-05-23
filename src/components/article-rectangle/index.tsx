import React from 'react'
import './style.css'

function ArticleRectangle() {
  return (


    <div className="cursor-pointer all-articles-article  box-border overflow-hidden w-full">
      <div className="article font-primary group rounded-md h-full mix-blend-normal opacity-70 hover:bg-[#fafafa] hover:opacity-100 hover:ease-in-out duration-300">
        <a >
          <div className="article-container p-7 h-60 flex flex-col gap-2">

            <div className="mb-3 text-sm text-gray-400">|   7 May 2023</div>
            <div className="article-title text-lg font-bold font-primary">The Benefits of Cloud Computing</div>
            <div className="article-description text-secondary text-sm">
              Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.
            </div>
            <div className="article-link flex gap-5 mt-auto">
              <div className="article-link-text text-green-400">Read Article</div>
              <div className="article-link-icon">
                <i className="fa-solid fa-greater-than text-green-400"></i>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>


  )
}

export default ArticleRectangle