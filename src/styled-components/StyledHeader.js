import styled from "styled-components";


const StyledHeader = styled.header`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 6.4rem 0 1.6rem;

    h1{
        font-size: 1.6rem;
        font-weight: bold;
        text-align: center;
        color: #817d92;
        margin-bottom: 1.6rem;
    }

    .password{
        width: 343px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 1.7rem 1.55rem  1.5rem 1.6rem;
        background-color: #24232c;
    }

    .password p{
        font-size: 2.4rem;
        font-weight: bold;
        text-align: left;
        color: #e6e5ea;
    }

    .copy-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.6rem;
    }

    span{
        font-size: 1.8rem;
        font-weight: bold;
        text-align: left;
        color: #a4ffaf;
    }

    #copy:hover{
        cursor: pointer;
        filter: brightness(0) invert(1);
        
    }
    @media only screen and (min-width:768px) {
    
    
    header{
        margin: 13.3rem 0 2.4rem;
    }
    
    h1{
        font-size: 2.4rem;
        font-weight: bold;
        margin-bottom: 3.1rem;
    }
    
    .password{
        width: 54rem;
        padding: 1.9rem 3.2rem;
    }
    
    .password p{
        font-size: 3.2rem;
    }

    }

`

export default StyledHeader;