import React from 'react'

const TestimonialCard = ({ name, job, text }) => {
  return (
    <div className="w-full border-[1px] border-green p-4 rounded-lg group hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
      <div className="w-14 h-14 rounded-full bg-gray-300 mx-auto group-hover:bg-green-500"></div>
      <div className="text-white group-hover:text-gray-950">
        <h3 className="text-center font-bold text-lg mt-4">{name}</h3>
        <p className="text-center text-sm mt-2">{job}</p>
        <p className="text-center text-sm mt-2">{text}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
