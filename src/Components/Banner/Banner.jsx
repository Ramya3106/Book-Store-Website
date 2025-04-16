import React from 'react'
import LibraryImg from "../../assets/website/library.jpg"
import { GrSecure } from "react-icons/gr";
 
const Banner = () => {
  return (
    <>
    <div className='py-10 '>
    <div className='container'>
      <div className='grid grid-cols-1 sm:grid-cols-2
      items-center gap-6'>
        {/*image section */}
        <div>
          <img 
          data-aos="zoom-in"
          
          src={LibraryImg} alt=''
          className='max-w-[400px] block mx-auto h-[350px] 
          w-full drop-shadow-
          [-10px_10px_12px_rgba(0,0,0,1)]
          object-cover' />
          </div>
        {/*text content section */}
        <div 
        data-aos="slide-up"
        
        className='flex flex-col justify-center 
        gap-6 sm:pt-0'>
          <h1 className='text-3xl sm:text-4xl
          font-bold'>Library at your fingertips</h1>
          
          <p className='text-sm text-gray-500 
          tracking-wide leading-5'> 
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae recusandae ducimus iure quaerat velit sed consequatur nobis enim at sint! Placeat ipsam mollitia at. Nisi ad aliquam tempora deserunt cum non dolorum architecto nemo, mollitia omnis blanditiis nobis repudiandae laboriosam, quod totam dolor quia, delectus natus. Harum vel corporis ut?
          </p>
          <div className='flex flex-col gap-6 '>
            <div className='flex items-center gap-4  '>
            <GrSecure className='text-4xl
            h-12 w-12 shadow-sm p-4
            rounded-full bg-violet-100
            dark:bg-violet-400 hover:scale-105 duratiom-800 '/>
            <p>Quality Books</p>

            </div>
            <div className='flex items-center gap-4'>
            <GrSecure className='text-4xl
            h-12 w-12 shadow-sm p-4
            rounded-full bg-orange-100
            dark:bg-orange-400 hover:scale-105 duratiom-800 '/>
            <p>Fast Delivery</p>
            </div>

            <div className='flex items-center gap-4'>
            <GrSecure className='text-4xl
            h-12 w-12 shadow-sm p-4
            rounded-full bg-green-100
            dark:bg-green-400 hover:scale-105 duratiom-800 '/>
            <p>Easy Payment Method</p>
            </div>

            <div className='flex items-center gap-4'>
            <GrSecure className='text-4xl
            h-12 w-12 shadow-sm p-4
            rounded-full bg-yellow-100
            dark:bg-yellow-400 hover:scale-105 duratiom-800 '/>
            <p>Get Offers On Books</p>
            </div>

          </div>
          
          
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Banner