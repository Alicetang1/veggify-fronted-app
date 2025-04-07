import React from 'react'
import blogData from '../../blog'

const Resources = () => {
  return (
    <div>
      <section className='px-6 lg:px-12 py-20'>
        <h1 className='text-3xl text-center font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>
          Resources
        </h1>
        <article className='py-6 sm:py-12'>
          <div className='container p-6 mx-auto space-y-8'>
            <div className='space-y-2 text-center'>
              <h2 className='text-3xl font-bold'>Partem reprimique an </h2>
              <p className='text-sm mb-16'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4'>
              {blogData.map((blog, index) => (
                <article key={index} className='flex flex-col border rounded-md mt-8'>
                  <a href='#' aria-label={blog.title}>
                    <img
                      src={blog.imgSrc}
                      alt=''
                      className='object-cover w-full h-52 dark:bg-gray-500'
                    />
                  </a>
                  <div className='flex flex-col flex-1 p-6'>
                    <a
                      href='#'
                      className='text-xs tracking-wider uppercase hover:underline dark:text-violet-600'
                    >
                      {blog.category}
                    </a>
                    <h3 className='flex-1 py-2 text-lg font-semibold leading-snug'>
                      {blog.title}
                    </h3>
                    <div className='flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600'>
                      <p className='text-sm'>{blog.date}</p>
                      <p className='text-sm'>{blog.views}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Resources
