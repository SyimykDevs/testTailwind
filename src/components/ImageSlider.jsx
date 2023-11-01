import React from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'

const  ImageSlider = () => {
    const slides = [
        {
            url:'https://www.bordbia.ie/globalassets/bordbia2020/food-and-living/recipes/new-recipes-6.7.20/06.04.22/grilled-lobster-with-garlic-lemon-and-herb-butter---landscape.jpg',
            title:'Lobster'
        },
        {
            url:'https://fusedbyfionauyema.com/wp-content/uploads/2021/02/Fused-by-Fiona-Uyema-Sushi-Q-A-how-to-make-sushi-at-home.jpg',
            title:'Sushi'
        },
        {
            url:'https://upload.wikimedia.org/wikipedia/commons/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg',
            title:'Pasta',
        },
        {
            url:'https://www.licious.in/blog/wp-content/uploads/2022/09/Shutterstock_1191507805-1000-%C3%97-1000-750x750.jpg',
            title:'Salmon',
        }
    ];
  return (
    <div className='max-w-[1400px] h-[580px] m-auto py-16 px-4 relative'>
        <div className='w-full h-full rounded-xl bg-center bg-cover duration-500' style={{backgroundImage:`url(${slides[0].url})`}}></div>

        {/*Left Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'> 
            <BsChevronCompactLeft />
        </div>
        {/* Right Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'> 
            <BsChevronCompactRight />
        </div>
    </div>
  )
}

export default ImageSlider