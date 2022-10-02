import React from 'react'

interface Props {
  url: string
  className?: string
}

const Avatar = ({ url, className }: Props) => {
  return (
    <img
      className={`h-10 rounded-full cursor-pointer 
        transition duration-150 transform hover:scale-110 ${className}`}
      loading='lazy'
      src={url}
      alt='profile pic'
    />
  )
}

export default Avatar