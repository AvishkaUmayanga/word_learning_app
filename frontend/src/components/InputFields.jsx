import React from 'react'

export default function InputFields({ label, type, name, onChange, required }) {
  return (
    <div>
      <div className='flex items-center justify-between mb-5'>
        <label>
            <p>{label}:</p>
        </label>
        <input
        type={type}
        name={name}
        className='w-[200px] h-8 border'
        required={required}
        onChange={onChange}
      />
     </div>
    </div>
  )
}
