import React, { useState } from 'react'
import Book1 from "../../assets/Books/Book1.jpg"
import Book2 from "../../assets/Books/Book2.jpg"
import Book3 from "../../assets/Books/Book3.jpg"
import vector from "../../assets/website/blue-pattern.png";


const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "Rock Paper Scissors",
    description: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, a. Possimus fugiat optio, beatae deserunt est tempora aliquid harum earum deleniti aut quia dicta voluptas. Laudantium omnis neque rerum unde",

  },
  {
    id: 2,
    img: Book2,
    title: "Who's There?",
    description: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, a. Possimus fugiat optio, beatae deserunt est tempora aliquid harum earum deleniti aut quia dicta voluptas. Laudantium omnis neque rerum unde",

  },
  {
    id: 3,
    img: Book3,
    title: "The Fault In Our Stars?",
    description: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, a. Possimus fugiat optio, beatae deserunt est tempora aliquid harum earum deleniti aut quia dicta voluptas. Laudantium omnis neque rerum unde",

  },

];

const Hero = () => {
  const [imageId , setimageId]=useState(Book1);
  const [title , setTitle]=useState("Rock Paper Scissors ");
  const [description , setDescription]=useState(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, a. Possimus fugiat optio, beatae deserunt est tempora aliquid harum earum deleniti aut quia dicta voluptas. Laudantium omnis neque rerum unde!"
    );
    const bgImage = {
      backgroundImage: `url(${vector})` ,
      backgroundposition: "center",
      backgroundRepeat: "no-repeat" ,
      backgroundSize: "cover" ,
      width: "100%" ,
      
    };

  return (
    <>
  <div className='min-h-[550px] sm:min-h-
  [650px] bg-h-gray-100 flex justify-center
  items-center dark:bg-gray-950 
  dark:text-white duration-200'
  style={bgImage}
  >
    <div className="container pd-8 sm:pb-0">

       
      <div className='grid grid-cols-1
      sm:grid-cols-2 gap-8'>
        {/* text-content-section */}
        <div className='flex flex-col
        justify-center gap-4 pt-12 sm:pt-0
        text-center sm:text-left order-2
        sm:order-1'>
        <h1 className='text-5xl sm:text-6xl
        lg:text-4xl font-bold'>
          {title}

        <p className='bg-clip-text
        text-transparent bg-gradient-to-b
        from-primary text-right text-sm 
        to secondary'>
          by alice feeney
          </p>
        
        </h1>

        <p className='text-sm'>
          {description}
        </p>
        <div>
        <button 
        className='bg-gradient-to-r
        from-primary to-secondary
        text-white px-4 py-2 rounded-full
        mt-4 hover:scale-105 duration-200'>
          Order Now
        </button>
        </div>
       
        </div>
        
      
      {/* Image section */}
      <div className='min-h-[450px] 
      flex-justify-center items-center relative
      order-1 sm:order-2' >
        {/*Main image */}
        <div className='h-[300px] sm:h-[450px]
        overflow-hidden flex-justify-center
        items-center'>
          <img src={imageId} alt='' 
          className='w-[300] h-[450px]
          sm:[h-450px] sm:w-[450px]
          sm:scale-115 object-contain
          mx-auto'/>

        </div>
        {/*other image list */}
        <div className='flex lg:flex-col 
        lg:top-1/2 lg:-translate-y-1/2 lg:py-2
        justify-center gap-4
        absolute-bottom-[40px] lg:-right-1
        '>

        {ImageList.map((data) =>(
          <img src={data.img}
          className='max-w-[100px] h-[100px]
          object-contain inline-block hover:scale-110
          duration-200'
          onClick={ () => {
              setimageId(
                data.id == 1 ? Book1: 
                data.id == 2 ? Book2: 
                Book3);
                setTitle(data.title);
                setDescription(data.description);
          }} />
          
        
        ))}
        </div>

    
      </div>
    </div>
  </div>
  </div>
  
  </>
  )
  
  
}

export default Hero