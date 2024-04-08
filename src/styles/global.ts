import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "Poppins', sans-serif";
        src: url("/src/assets/fonts/Poppins-Medium.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Poppins', sans-serif";
        src: url("/src/assets/fonts/Poppins-Bold.ttf") format("truetype");
        font-style: normal;
        font-weight: bold;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Poppins', sans-serif;
        color: rgb(92,91,91,90%);
        font-size: 36px;
        line-height: 1.18;
        font-weight: bold;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #5C5B5B;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }


    label {
        font-family: 'Poppins', sans-serif;
        color: #5C5B5B;
        font-size: 15px;
        line-height: 1.18;
        font-weight: bold;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }

    a {
        font-family: 'Poppins', sans-serif;
    }


    button {
        background-color: none;
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`
export default GlobalStyle;
