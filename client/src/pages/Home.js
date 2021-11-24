import React from 'react';

// Components
import Nav from '../components/Nav';
import Hero from '../components/Hero'
import OurStory from '../components/OurStory';
import Quotes from '../components/Quotes';
import Contact from '../components/Contact';


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