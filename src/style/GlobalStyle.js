import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    // 적용시킬 css 입력
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    nav {
        display: flex;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    p{
        padding-bottom: 27px;
    }
    body{
        line-height: 1;
        background-color: #FFF;
        margin-bottom: 100px;
        font-family: Poppins;
        font-size: 36px;
        line-height: 36px;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    h1 {
        margin-bottom: 7px;
        font-weight: 600;
        line-height: 1.25 !important;
    }
    h3 {
        font-family: Poppins;
        font-weight: 400;
    }
    h5 {
        font-family: Poppins;
        font-weight: 600;
    }
`;

export default GlobalStyles;
