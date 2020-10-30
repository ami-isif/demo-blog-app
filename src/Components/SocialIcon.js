import React from 'react';



function SocialIcon( { icon_class, link_to } ) {
  return (
    <a href={link_to}>
    <i className = {icon_class + ' display-4'}></i>
    </a>
    );
}

export default SocialIcon;