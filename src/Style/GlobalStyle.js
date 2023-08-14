import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   body{
        max-width: 100vw;
        min-height: 100vh;
        font-family: 'Inter', sans-serif;
    }
    main{
        display: flex;
        margin-top: 20px;
        padding-left: clamp(20px , 10vw, 100px);
        padding-right: clamp(20px , 10vw, 100px);
        align-items: center;
        justify-content: center;
        @media (min-width: 769px){
        padding-left: clamp(120px , 1.25rem, 100px); 
        padding-right: clamp(20px , 1.25rem, 100px);
        }
    }
    :root {
        --color-color-primary: #27ae60;
        --color-color-secondary: #eb5757;
        --color-grey-600: #333333;
        --color-grey-300: #828282;
        --color-grey-100: #e0e0e0;
        --color-grey-0: #F5F5F5;
        --color-negative: #e60000;
        --color-warning: #ffcd07;
        --color-sucess: #168821;
        --color-information: #155bcb;
    }

`