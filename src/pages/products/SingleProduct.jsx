import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleProduct = () => {
  const item = useLoaderData();
  // useEffect(()=>{
  //   window.scrollTo(0.0)
  // },[])
  // console.log(item)
  const extractNumber =(timeString)=>{
    let timeArray = timeString.split(" ");
    return parseInt(timeArray[0])
  }
  let prepTimeMinutes=extractNumber(item?.more.prep_time)
  let cookTimeMinutes=extractNumber(item?.more.cook_time)
  
  const totalTimeMinutes = prepTimeMinutes+cookTimeMinutes


  return (
    <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
      <article>
        <div className='bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>
          <picture>
            <img src={item.thumbnail_image} alt="" className='md:max-w-[90%] w-full md:h-[570px] md:rounded-xl'/>
          </picture>

          <div className='px-8'>
            <h1 className='text-4xl mt-12 text-secondary'>{item.name}</h1>
            <p className='mt-6'>
              An easy and quick dish,An easy and quick dish,An easy and quick dish,An easy and quick dish
            </p>
            <article className='bg-rose-50 mt-6 p-5 rounded-xl'>
              <h2 className='text-xl font-semibold ml-2'>
                Preparation time
              </h2>
              <ul className='list-disc mt-3 ml-8 text-lg marker:text-orange-500'>
                <li className='pl-3'>
                  <p>
                    <span>
                      Total: <span>{totalTimeMinutes}</span>
                    </span>
                  </p>
                </li >
                <li className='pl-3 mt-3'>
                  <p>
                    <span>
                      Preparation: <span>{item?.more.prep_time}</span>
                    </span>
                  </p>
                </li >
                <li className='pl-3 mt-3'>
                  <p>
                    <span>
                      Cooking: <span>{item?.more.cook_time}</span>
                    </span>
                  </p>
                </li >
              </ul>
            </article>

            <div className='mt-5'>
              <h3 className='text-xl font-semibold ml-2'>Ingredients</h3>
              <ul className='list-disc marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle'>
                {
                  item?.ingredients.map((ingredient,index)=>(
                    <li key={index} className="pl-4 mt-2">
                      <span>{ingredient?.name}:</span>
                      <span>{ingredient?.quantity}</span>
                    </li>
                  ))
                }
              </ul>
              
            </div>
            {/* Instructions Section */}
            <div className='mt-5'>
              <h3 className='text-xl font-semibold ml-2'>Instructions</h3>
              <ul className="mt-4 text-secondary list-inside list-disc">
    {
      item?.instructions
        .replace(/\d+\./g, '') 
        .split('. ') 
        .filter(step => step) 
        .map((step, index) => (
          <li key={index} className="mt-2">{step.trim()}.</li>
        ))
    }
  </ul>
            </div>
 
          </div>
        </div>
      </article>
    </section>
  )
}

export default SingleProduct