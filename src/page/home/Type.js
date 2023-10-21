import React from "react";
import Typewriter from "typewriter-effect";
 //Custom Hooks
 import{ useLanguageContent } from '../../assets/content/useLanguageContent';

function Type() {
  const {home}= useLanguageContent();
  return (
    <Typewriter
      options={{
        strings: [        
          home.description
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 1,
        delay:40,
        pauseFor:15000,
      }}
    />
  );
}

export default Type;