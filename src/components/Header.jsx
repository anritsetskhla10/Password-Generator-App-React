import React, { useState } from 'react'

import CopyImg from "/images/icon-copy.svg"
import StyledHeader from '../styled-components/StyledHeader'

function Header({password , setPassword}) {

  const [copy, setCopy] = useState(false);

  const handleClick = () => {;
    
    navigator.clipboard.writeText(password ? password : "P4$5W0rD!")
    .then(() => {
    setCopy(!copy);
    setTimeout(() => setCopy(false), 10000); 
        })
    setTimeout(() => setPassword("P4$5W0rD!"), 10000)
    .catch(err => {
        console.error('Failed to copy password: ', err);
    });
    }
  

  return (
    <StyledHeader>
    <h1>
      Password Generator
    </h1>

    <div className="password">
      <p >
        { password ? password :  "P4$5W0rD!"}
      </p>

      <div className="copy-container">
        {
          copy &&
          <span >COPIED</span>
        }
        <img id='copy'  src={CopyImg} alt="copy" onClick={handleClick}/>
      </div>
    </div>
  </StyledHeader>

  )
}

export default Header
