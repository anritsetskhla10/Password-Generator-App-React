import React, { useState } from 'react';
import StyledMain from '../styled-components/StyledMain';

function Main({percent,sliderCount,countRange, password ,setPassword}) {
  
  const CheckArray = [
    'Include Uppercase Letters',
    'Include Lowercase Letters',
    'Include Numbers',
    'Include Symbols'
  ];

  const strengths = ['TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG'];
  const colors = ['#f64a4a', '#fb7c58', '#f8cd65', '#a4ffaf'];
  const conainerClass = ['first', 'second', 'third' , 'fourth']
 
 

  const [checkedStates, setCheckedStates] = useState(Array(CheckArray.length).fill(false));
  const [countCheck, setCount] = useState(-1);


  const markCheck = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);

    const checkedArr = [...newCheckedStates];
    let count = -1
    checkedArr.forEach((item) => {
      if(item){
       return count ++;
      }else{
       return count;
      }
    })
    setCount(count)
  }


    function createUpperCase(passLength){
      let upperCaseWords = []
      for(let i = 0; i < passLength; i++){
          let randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
          upperCaseWords.push(randomChar.toUpperCase());
      }
      return upperCaseWords;
  }

  function createLowerCase(passLength){
      let lowerCaseWords = []
      for(let i = 0; i < passLength; i++){
          let randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
          lowerCaseWords.push(randomChar.toLowerCase());
          }
      return lowerCaseWords
  }
    
  function validateNumbers(passLength){                              
      let numbers = [0,1,2,3,4,5,6,7,8,9];
      let passwordNums = [];
      for(let i = 0; i < passLength; i++){
      let randomIndex = Math.floor(Math.random() * numbers.length);
      passwordNums.push(numbers[randomIndex]);
      }
    
      return passwordNums;
  }

    function validateSpecialChar(passLength){                       
    const specialSymbols =  ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '[', ']', ':', ';', '<', '>', ',', '.', '?', '~', '\\', '-'];
    let symbols = [];
    for(let i = 0; i < passLength; i++){
    let randomIndex = Math.floor(Math.random() * specialSymbols.length);
    symbols.push(specialSymbols[randomIndex]);
    
    }
    return symbols;
  }

  const generatePass = () => {

    const passLength = sliderCount 


    if (isNaN(passLength) || passLength <= 0) {
        return  "Invalid password length.";
    }

    let specialChars = validateSpecialChar(passLength);
    let numberChars = validateNumbers(passLength);
    let uppercaseWords = createUpperCase(passLength);
    let lowerCaseWords = createLowerCase(passLength);

    let allChars = [];
    checkedStates.forEach((item, index) => {
      switch(index) {
        case 0:
          if (item) {
            allChars = allChars.concat(uppercaseWords);
          }
          break;
        case 1:
          if (item) {
            allChars = allChars.concat(lowerCaseWords);
          }
          break;
        case 2:
          if (item) {
            allChars = allChars.concat(numberChars);
          }
          break;
        case 3:
          if (item) {
            allChars = allChars.concat(specialChars);
          }
          break;
      }
    });

    if (allChars.length === 0) {
        return "No character set selected.";
    }

    let password = '';
    for (let i = 0; i < passLength; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    setPassword(password)
  }


  return (
    <StyledMain $percent={percent} $colors={colors} $countcheck={countCheck} >
      <div className="length-range">
        <label id="slider" htmlFor="range">
          <h2>Character Length</h2>
          <span className="current-range">{sliderCount}</span>
        </label>
        <input
          id="range"
          className="range"
          type="range"
          onChange={countRange}
          value={sliderCount}
          min="0"
          max="20"
        />
        <div className="range-active"></div>
      </div>

      <div className="checklist">
      {CheckArray.map((item, index) => (
        <label key={index} className="check-container">
          <input 
            type="checkbox" 
            className="check" 
            onChange={() => markCheck(index)} 
            checked={checkedStates[index]} 
          />
          <span className="checkmark"></span>
          {item}
        </label>
      ))}
    </div>

    <div className="strength-checker">
        <h3>STRENGTH</h3>
        <div className="strength-wrapper">
          {countCheck >= 0 && <p className='strength-text'>{strengths[countCheck]}</p>}
          {strengths.length > 0 && (
          <div className='strength-container'>
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className={`container ${checkedStates[index] ? conainerClass[index]: ''}`}></div>
            ))}
          </div>
        )}

        </div>
      </div>

      <button id="generate" onClick={generatePass}>GENERATE</button>
    </StyledMain>
  );
}

export default Main;