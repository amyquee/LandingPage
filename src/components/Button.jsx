import React from 'react'

const Button = ({ styles }) => {
  return (
    <div>
      <button type='button' className={`py-4 px-6 bg-blue-gradient
      font-medium font-poppins text-[18px] text-primary outline-none 
      rounded-lg ${styles}`}>
        Get Started
      </button>
    </div>
  )
}

export default Button
