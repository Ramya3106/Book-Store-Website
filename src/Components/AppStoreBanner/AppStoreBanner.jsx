import React from 'react'
import BoardImg from '../../assets/website/board.png'
import PlayStoreImg from '../../assets/website/Play_Store.png'
import AppStoreImg from '../../assets/website/App_Store.png'

const bannerImg = {
    backgroundImage:`url(${BoardImg})`,
    backgroundposition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}


const AppStoreBanner = () => {
  return (
    <div className='bg:gray-100
    dark:bg-gray-800 text-white py-10'
    style={bannerImg}>
        <div className='container'>
            <div className='space-y-6 max-w-xl
            mx-auto'>
                <h1 
                data-aos="slide-up"
                className='text-2xl text-center 
                sm:text-4xl font-semibold'>Read Books at Your Fingertips
                </h1>  
                <div 
                data-aos="slide-up"
                className='flex flex-wrap
                justify-center items-center gap-4'>
                    <a href='#'>
                        <img src={PlayStoreImg} alt='' 
                        className='max-w-[150px]
                        sm:max-w-[120px] md:max-w-[200px]'/>

                    </a>
                    <a href='#'>
                        <img src={AppStoreImg} alt='' 
                        className='max-w-[150px]
                        sm:max-w-[120px] md:max-w-[200px]'/>

                    </a>
                    
                </div>          
            </div>
        </div>
    </div>
  )
}

export default AppStoreBanner
