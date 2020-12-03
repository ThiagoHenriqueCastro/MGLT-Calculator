import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #fafafa;
        color: #333333;
        font-size: 16px;
        margin: 0;
    }

    *:focus{
        outline: none;
    }

    *{
        box-sizing: border-box;
    }
    
    `;
