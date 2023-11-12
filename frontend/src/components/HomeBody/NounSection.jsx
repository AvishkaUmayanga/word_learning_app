import React from 'react'

export default function NounSection({heading, text}) {
  return (
    <div>
      <div className='bg-white w-[100px] h-[50px] rounded-lg flex flex-col p-1 justify-center'>
        <div className='flex self-start text-sm'>
            <h3>{heading}</h3>
        </div>
        <div className='flex justify-center font-semibold text-center'>
            <p>{text}</p>
        </div>
      </div>
    </div>
  )
}
