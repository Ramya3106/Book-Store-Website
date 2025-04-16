import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import BestBooks from './Components/BestBooks/BestBooks';
import Banner from './Components/Banner/Banner';
import AppStoreBanner from './Components/AppStoreBanner/AppStoreBanner';
import AllBooks from './Components/AllBooks/AllBooks';
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';
import Popup from './Components/Popup/Popup';

//ios import
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from './Components/Popup/Popup';

const App = () => {
  const[orderPopup, setOrderPpopup] = React.useState
  (false);

  const handleOrderPopup = () => {
    setOrderPpopup(!orderPopup);
  }

  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-out-sine",
      delay:100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
    <div className=' bg-white dark:bg-gray-900
    dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <BestBooks handleOrderPopup={handleOrderPopup}/>
      <Banner />
      <AppStoreBanner />
      <AllBooks />
      <Testimonial />
      <Footer />
      <Popup handleOrderPopup={handleOrderPopup}
      orderPopup={orderPopup}/>
      
      
    </div>
    
    </>
  );
};

export default App;