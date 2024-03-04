import React from 'react'

const Card = ({title, img, desc, selected}) => {
  return (
    <div>
       <div className="w-72 mx-5 duration-300 ease-in-out cursor-pointer">
          <img className={`rounded-full p-2 hover:p-0 hover:border-8 hover:border-yellow-200 ${selected ? 'border-4 border-yellow-500' : ''}`} src={img} alt={title}/>
          {/* TODO: Add description of pose. */}
       </div>
    </div>
  )
}

export default Card