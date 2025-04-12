import React from 'react'
import Book1 from "../../assets/Books/Book1.jpg"
import Book2 from "../../assets/Books/Book2.jpg"
import Book3 from "../../assets/Books/Book3.jpg"
import { FaStar } from "react-icons/fa";

const BooksData = [
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

const BestBooks = () => {
  return (
    <>
    <div className='py-10'>
        <div className='container'>
            {/*Header section */}
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-5m bg-clip-text
                text-transparent bg-gradient-to-r
                from-primary to-secondary'>
                    Trending Books
                </p>
                <h1 className='text-3xl font-bold'>Best Books</h1>
                <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit doloremque rem commodi beatae exercitationem quia cumque explicabo? Suscipit, facilis?
                    {""}
                </p>
            </div>
            {/*card section */}
            <div className='grid grid-cols-1
            sm:grid-cols-2 md:grid-cols-3 md:gap-5
            place-items-center'>
                {BooksData.map((book) => (
                    <div className='rounded-2xl bg-white
                    dark:bg-gray-800 hover:bg-primary
                    dark:hover:bg-primarry hover:text-white
                    relative shadow-xl duration-high group max-w-[300px]'>
                        <div className='h-[100px]'>
                            <img src={book.img} alt='' 
                            className='max-w-[100px] block
                            mx-auto transform 
                            -translate-y-14
                            group-hover:scale-105
                            duration-300 shadow-md'/>

                        </div>
                        <div className='p-4 text-center'>
                            <div className='w-full flex
                            items-center justify-center'>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            </div>
                            <h1 className='text-xl font-bold'>{book.title}</h1>
                            <p className='text-gray-500
                            group-hover:text-white
                            duration-300 text-sm line-clamp-2'>{book.description}</p>
                            <button className='bg-primary
                            to-secondary text-white px-4 py-2 rounded-full mt-4
                            hover:scale-105 duratiom-200 group-hover:bg-white
                            group-hover:text-primary'>Order Now</button>
                        </div>
                    </div>
                )
                )
                }
                
            </div>       
        </div>
    </div>
    </>
        
  )
}

export default BestBooks