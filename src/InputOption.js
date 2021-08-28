import React from 'react'

function InputOption({ Icon, title, color }) {
  return (
    <div className="inputoption">
      <Icon style={{ color }} />
      <h4>{title}</h4>
    </div>
  )
}

export default InputOption
