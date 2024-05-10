import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1200] mx-auto bg-black sm:py-20 p-5' id='work'>
        <div className='text-center'>
            <h2 className='text-4xl font-bold leading-tight primary-color'>Contact me - Say Hello</h2>
        </div>

        <div className='max-w-[800px] mx-auto'>
            <div className='mt-6 bg-[#353535] rounded-xl'>
            <div className='p-10'>

            <form action='https://getform.io/f/pbqxrxra' method='POST'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                    <div>
                        <div className='mt-2.5 relative'>
                            <input type='text' name='name' id='nam' placeholder='Your name'
                            className='bg-[#353535] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray,
                            rounded-md focus:outline-none focus:border-blue-600' />
                        </div>
                    </div>

                    {/* ------------------------------------------------- */}

                    <div>
                        <div className='mt-2.5 relative'>
                            <input type='text' name='email' id='mail' placeholder='Your Email'
                            className='bg-[#353535] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray,
                            rounded-md focus:outline-none focus:border-blue-600' />
                        </div>
                    </div>

                    {/* ------------------------------------------------------------ */}

                    <div className='sm:col-span-2'>
                        <div className='mt-2.5 relative'>
                            <textarea type='text' name='message' id='mess' placeholder='Your Message'
                            className='bg-[#353535] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray,
                            rounded-md focus:outline-none focus:border-blue-600' rows='4' />
                        </div>
                    </div>

                    {/* ---------------------------------------------------------------- */}

                    <div className='sm:col-span-2'>
                        <button type='submit' className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md
                        hover hover:from-blue-300 to-purple-900  inline-block;'>
                            Send
                        </button>

                    </div>

                </div>
            </form>

            </div>

            </div>

        </div>
      
    </div>
  )
}

export default Contact
