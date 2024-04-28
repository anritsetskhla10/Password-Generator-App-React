import { useState } from 'react'
import { GlobalStyles } from './GlobalStyles'
import Header from './components/Header'
import Main from './components/Main'


function App() {

  const [sliderCount, setSliderCount] = useState(0);
  const [percent, setPercent] = useState(0);
  const [password, setPassword] = useState();

  const countRange = (e) => {
    const value = parseInt(e.target.value);
    setSliderCount(value);
    const percentRange = (value / parseInt(e.target.max)) * 100;
    setPercent(percentRange)
  };

  return (
    <>
     <GlobalStyles/>
     <Header password={password} setPassword={setPassword}/>
     <Main 
     percent={percent}
     sliderCount={sliderCount}
     countRange={countRange}
     password={password}
     setPassword={setPassword}
     />
    </>
  )
}

export default App
