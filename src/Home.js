import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div id="home" style={{ height: '100vh', background: '#ade8f4' }}>
      <h1>Home</h1>
      <h2>Yak</h2>
      <p>the most memeable memecoin in existence. The dogs have had their day, it’s time for Pepe to take reign.</p>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className='icon-twitter'/>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTelegram} className='icon-telegram'/>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} className='icon-youtube'/>
      </a>
    </div>
  );
}

export default Home;
