import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://twitter.com/JosephAkintayo'>
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href='https://web.facebook.com/akintayo.joseph.39'>
        <FaFacebookF />
      </a>  
    </div>
    <div>
      <a href='https://www.linkedin.com/in/josephakintayo'>
        <BsLinkedin />
      </a> 
    </div>
  </div>
);

export default SocialMedia;
