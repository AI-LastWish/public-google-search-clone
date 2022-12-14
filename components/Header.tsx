import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

const Header = () => {
  const router = useRouter()
  const searchInputRef = useRef<HTMLInputElement>(null)

  const search = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const term = searchInputRef.current?.value

    if (!term) return

    router.push(`search/?term=${term}`)
  }

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          height={40}
          width={120}
          className='cursor-pointer'
          onClick={() => router.push('/')}
          alt='google-logo'
        />

        <form className='flex flex-grow px-6 py-3 ml-10 mr-5
        border border-gray-200 rounded-full
        shadow-lg max-w-3xl items-center'
        >
          <input
            ref={searchInputRef}
            className='flex-grow w-full focus:outline-none'
            type="text"
            defaultValue={router.query.term}
             />
          <XIcon
            className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100
            transform hover:scale-125'
            onClick={() => {
              if (searchInputRef?.current?.value)
                searchInputRef.current.value = ""
            }}
          />
          <MicrophoneIcon className='mr-3 h-6 hidden sm:!inline-flex 
          text-blue-500 border-l-2 pl-4 border-gray-300' />
          <SearchIcon className='h-6 text-blue-500 hidden sm:!inline-flex' />
          <button className='hidden' type='submit' onClick={search}>Search</button>
        </form>
        <Avatar
          url='https://media-exp1.licdn.com/dms/image/C5603AQEIAt-9U1ADNg/profile-displayphoto-shrink_800_800/0/1636017435168?e=1669852800&v=beta&t=78RAdKSiGuw0eInun5zSdFBizl9hmUlzUMqaZDhW9OA'
          className='ml-auto'
        />
      </div>

      {/* HeaderOptions */}
      <HeaderOptions/>

    </header>
  )
}

export default Header