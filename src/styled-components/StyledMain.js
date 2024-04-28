import styled from "styled-components";


const StyledMain = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6.3rem;
    background-color: #24232c;


.length-range{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2.1rem 0 3.1rem;
    position: relative;
}

#slider{
    width: 343px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.6rem;
}

h2{
    font-size: 1.6rem;
    font-weight: bold;
    color: #e6e5ea;
}

span{
    font-size: 2.4rem;
    font-weight: bold;
    color: #a4ffaf;
}

/* length slider */

.range{
    width: 311px;
    height: 8px;
    margin: 2.3rem 0 1.1rem;
    background-color: #18171f;
    appearance: none;
}

.range::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 2.8rem;
    width: 2.8rem;
    border-radius: 50%;
    background-color: #e6e5ea;
    transition: 0.1s;
    cursor: grab;
    position: relative;
    z-index: 2;
  }
  
  .range::-webkit-slider-thumb:hover {
    border: solid 2px #a4ffaf;
    background-color: #18171f;
  }

  .range::-webkit-slider-thumb:active {
    -webkit-appearance: none;
    cursor: grabbing;
    background-color: #a4ffaf;
  }

 .range-active{
    background-color: #a4ffaf;
    width: ${(props) => props.$percent ? `${props.$percent}%` : '0'};
    height: 8px;
    position: absolute;
    bottom: 1.1rem;
    left: 1.6rem;
 }

/* length slider end */

/* checkbox */

.checklist {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.6rem;
    margin-bottom: 3.2rem;
    padding: 0 3.1rem 0 0;
}

.check-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: left;
    color: #e6e5ea;
}

.check {
    width: 2rem;
    height: 2rem;
    margin: 0.1rem 2rem 0 0;
    background-color: #a4ffaf;
    opacity: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
    height: 2rem;
    border: solid 2px #e6e5ea;
}

.checkmark:hover{
    cursor: pointer;
    border: solid 2px #a4ffaf;
}

.check:checked + .checkmark {
    border: none;
    background:  url(./images/icon-check.svg);
    background-position:center;
    background-color: #a4ffaf;
    background-repeat: no-repeat;
}


/* checkbox end */

.strength-checker{
    width: 311px;
    margin: 0 0 1.6rem;
    padding: 1.4rem 1.6rem;
    background-color: #18171f;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

h3{
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    color: #817d92;
}

.strength-checker p{
    font-size: 1.8rem;
    font-weight: bold;
    text-align: right;
    color: ${(props) => props.$countcheck === -1? "#e6e5ea" : props.$colors[props.$countcheck] } ;
}

.strength-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;
}

.strength-container{
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
}

.container{
    width: 1rem;
    height: 2.8rem;
    border:  solid 2px #e6e5ea ;
}


.first, .second, .third, .fourth{
    border: none;
    background-color:${(props) => props.$countcheck === -1? "" : props.$colors[props.$countcheck] }
}


#generate{
    width: 311px;
    padding: 1.8rem 10.4rem 1.7rem 10.3rem;
    border: none;
    background-color: #a4ffaf;
    margin-bottom: 1.6rem;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    color: #24232c;
    background-image: url(./images/icon-arrow-right.svg);
    background-repeat: no-repeat;
    background-position: 28.8rem center ;
}


#generate:hover {
    border: solid 2px #a4ffaf;
    background-color: #24232c;
    color: #a4ffaf;
    background-image: url(./images/bx_arrow-to-left.svg);
}


@media only screen and ( min-width: 768px){
    
    margin-bottom: 19.6rem;
    
    .length-range{
        margin: 2.4rem 0 3.3rem;
        position: relative;
    }
    
    #slider{
        width: 476px;
        padding: 0 ;
    }
    
    h2{
        font-size: 1.8rem;
    }
    
    span{
        font-size: 3.2rem;
    }
      
    .range{
        width: 476px;
        height: 8px;
        margin: 1.6rem 0 3.2rem;
    }

    
     .range-active{
        bottom: 3.2rem;
        left: 0;
     }
    

    
    .checklist {
        gap: 2rem;
        padding: 0 16.5rem 0 0;
    }
    
    .check-container {
        font-size: 1.8rem;
    }
    
    .check {
        width: 2rem;
        height: 2rem;
        margin: 0.1rem 2rem 0 0;
        background-color: #a4ffaf;
        opacity: 0;
        cursor: pointer;
    }

    
    .strength-checker{
        width: 476px;
        margin: 0 0 3.2rem;
        padding: 2.5rem 3.2rem;
    }
    
    h3{
        font-size: 1.8rem;
    }
    
    .strength-checker p{
        font-size: 2.4rem;
    }
    
    
    #generate{
        width: 476px;
        padding: 2.1rem 17.7rem ;
        gap: 2.4rem;
        margin: 0 0 3.2rem 0;
    }
    
    .btn-text{
        font-size: 1.8rem;
    }
}

`


export default StyledMain