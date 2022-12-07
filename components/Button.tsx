import React from 'react'

interface Props {
    title: string,
    onClick?: ()=> void,
    width?: string,
    loading?: boolean,
    padding?: string,
    noIcon?: boolean
}

function Button({title}: Props) {
  return (
    <button>
        
    </button>
  )
}

export default Button