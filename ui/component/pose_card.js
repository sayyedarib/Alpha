import React from 'react'

const card = ({title,img,desc}) => {
  return (
    <div>
       <div className="-mt-2 p-2 lg:mt-0 ml-3 lg:w-9/12 lg:max-w-md lg:flex-shrink-0 hover:scale-105 duration-300 ease-in-out">
            <div className="rounded-2xl bg-amber-100 py-10 text-center ring-1 ring-inset ring-gray-900 lg:flex lg:flex-col lg:justify-center lg:py-10">
              <div className="mx-auto max-w-xs px-8">
                <p className=" font-bold text-xl text-gray-600">{title}</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                 <img src={img} alt={title}/>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-red-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Select
                </a>
                <p className="mt-6 leading-5 text-gray-800 font-bold">
                  {desc}
                </p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default card
