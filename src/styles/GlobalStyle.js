import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// Elements
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat Alternates', sans-serif;
    }

    h1{
        font-size: 2rem;
    }
    
    h2{
        font-size: 1.8rem;
    }

    p{
        font-size: 1.1rem;
    }

    section{
        width : 100%;
        height : auto;
    }

    a.active p{
        text-decoration: underline;
    }

    
// Classes   
    .active{
        text-decoration: underline !important; 
    }
    .imgHome{
        width: 250px;
        height: 250px;
    }
    .imgShop{
        width: 200px;
        height: 200px;
    }
    .imgBasket{
        width: 100px;
        height: 100px;
    }
    .cursor-pointer{
        cursor: pointer;
        :hover{
            text-decoration: underline;
        }
    }


    //MUI classes
    .MuiPopover-root div{
        border-radius: 15px;
    }
`;

export default GlobalStyle;