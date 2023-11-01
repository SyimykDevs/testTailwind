import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen' src="https://cdn2.tu-tu.ru/image/pagetree_node_data/1/55cec4cd41541b494b705dab099ccb24/" alt="" />
        <div className='bg-black/20 absolute top-0 left-0 w-full h-screen' />
        <div className='absolute top-0 w-full h-full left-0 flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p>All Inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
                <p className='max-w-[600px] drop-shadow-2xl  py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum dolorum ratione nam illo nihil. Pariatur placeat dolorem laboriosam explicabo?</p>
                <button className='bg-white text-black'>Reserve Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero