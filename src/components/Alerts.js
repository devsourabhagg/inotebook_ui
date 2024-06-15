import React from 'react'

export const Alerts = (props) => {
  return (
    <div className='alert alert-primary' role='alert'>
    {props.message}
    </div>
  )
}
