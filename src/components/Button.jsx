import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className="flex justify-center items-center gap-2 border border-s-gray-800 border-t-gray-800 rounded-md py-2 px-5 font-medium to-gray-900 hover:shadow-inner hover:shadow-gray-700">{props.icon} {props.text}</button>
    </div>
  )
}

export default Button
