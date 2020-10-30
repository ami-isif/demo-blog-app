import React from 'react';
import SocialIcon from './SocialIcon';

function Footer() {
  return (
    <div className="footer">
    <div className="container mt-3 py-3 text-center">
      <p>
       <SocialIcon icon_class="bx bxl-google-plus-circle" link_to="https://www.google.com"/>
       <SocialIcon icon_class="bx bxl-twitter mx-3" link_to="https://www.twitter.com"/>
       <SocialIcon icon_class="bx bxl-wikipedia mx-3" link_to="https://www.wikipedia.com"/>
       <SocialIcon icon_class="bx bxl-linkedin-square"link_to="https://www.linkedin.com"/>                       
      </p> 
    <p><small>Copyright @ Amira Issifu blog 2020 </small></p>
   </div>
   </div>
 );
}

export default Footer;
