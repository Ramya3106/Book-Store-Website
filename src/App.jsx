import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import BestBooks from './Components/BestBooks/BestBooks';



const App = () => {
  return (
    <>
    <div className=' bg-white dark:bg-gray-900
    dark:text-white duration-200'>
      <Navbar/>
      <Hero />
      <BestBooks />
      <Banner />
    </div>
    
    </>
  );
};

export default App;