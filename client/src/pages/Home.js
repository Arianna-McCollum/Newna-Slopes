import React from 'react';
import Hero from '../components/Hero'
import OurStory from '../components/OurStory';
import Quotes from '../components/Quotes';
import Contact from '../components/Contact';
import Nav from '../components/Nav';


function Home() {
  return (
    <div>
        < Nav />
        < Hero />
        < OurStory />
        < Quotes />
        < Contact />
    </div>
    
  );
}

export default Home;