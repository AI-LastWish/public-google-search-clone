import { SearchIcon } from '@heroicons/react/outline'
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from '../components/Avatar'
import Footer from '../components/Footer'

const Home = () => {
  const router = useRouter()
  const searchInputRef = useRef<HTMLInputElement>(null)

  const search = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const term = searchInputRef.current?.value

    if (!term) return

    router.push(`search/?term=${term}`)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google</title>
      </Head>

      {/* <Header /> */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* Left */}
        <div className='flex items-center space-x-4'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* Right */}
        <div className='flex items-center space-x-4'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2 cursor-pointer
            rounded-full hover:bg-gray-100' />

          {/* Avatar */}
          <Avatar url='https://media-exp1.licdn.com/dms/image/C5603AQEIAt-9U1ADNg/profile-displayphoto-shrink_800_800/0/1636017435168?e=1669852800&v=beta&t=78RAdKSiGuw0eInun5zSdFBizl9hmUlzUMqaZDhW9OA' />
        </div>

      </header>

      {/* Body */}
      <form className='flex flex-col items-center mt-20 flex-grow w-4/5'>
        <Image
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          height={100}
          width={300}
          alt='google-logo'
        />
        <div className='flex w-full mt-5 hover:shadow-lg max-w-md 
          focus-within:shadow-lg rounded-full border border-gray-200
          px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input
            type="text"
            ref={searchInputRef}
            className='focus:outline-none flex-grow'
          />
          <MicrophoneIcon className='h-5' />
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8
          sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={search} className='btn'>I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home