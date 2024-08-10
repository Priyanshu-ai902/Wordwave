import React from 'react'

const TextArea = ({ id, value, onChange, placeholder }) => {
  return (
    <textarea
      rows={5}
      id={id}
      className='py-2.5 px-4 border-none focus:outline-none block w-full border-transparent rounded-lg dark:bg-black dark:border-transparent dark:text-gray-100'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextArea
