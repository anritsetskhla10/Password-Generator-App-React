import { createGlobalStyle } from "styled-components";



export  const GlobalStyles = createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "JetBrains Mono", monospace;
        
    }

    html{
        font-size: 62.5%;
    }

    body{
        min-width: 375px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: linear-gradient(to bottom, #14131b, #08070b);
        background-repeat: no-repeat;

    }
`;