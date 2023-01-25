import styled from "styled-components";
import HeaderBackImg from '../img/bg.jpg'
import { theme } from "../Theme";


export const BackgroundSection = styled.section`
// background-image: url(${HeaderBackImg});

    background-color: ${theme.mint};
    background-position: center;
    background-size: cover;
    width: 100%;
    min-height: 700px;
    display: flex;

    img{
        width: 30%;
        margin: auto;
        display: block;
    }
`