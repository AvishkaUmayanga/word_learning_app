import React from 'react'
import SectionDetails from './SectionDetails'
import { NavLink } from 'react-router-dom'

const WordCard = ({tableData}) => {
  return (
    <div className='flex justify-center my-5'>
      <div className='flex justify-center my-5'>
        <div className='w-[320px] bg-white rounded-2xl flex flex-col items-center gap-5 p-4 shadow-xl xs:w-[380px]'>
          <div className='flex justify-end w-full'>
            <NavLink to={`/update_word/${tableData.id}`}><button className='px-2 py-1 text-white rounded-full bg-redcolor border-bluebg'>Update</button></NavLink>
          </div>
          <div className='text-center'>
            <h3 className='text-xl font-semibold'>{tableData.word}</h3>
            <h4 className='text-lg font-semibold'>{tableData.meaning}</h4>
          </div>
          {Object.entries(tableData).map(([sectionName, data]) =>(
            <SectionDetails key={sectionName} sectionName={sectionName} data={data}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WordCard