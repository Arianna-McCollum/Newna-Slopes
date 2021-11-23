import React from 'react';
import Fade from 'react-reveal/Fade';

function Quotes() {
  return (
    <Fade bottom cascade>
    <section className="quote">
        <div className="quote-container">
          <p>"Powder Snow Skiing is not fun. It's life, fully lived - life lived in a blaze of reality"
            <br></br>
            <span>- Dolores LaChapelle</span>
          </p>
        </div>
    </section>
    </Fade>
    
  );
}

export default Quotes;