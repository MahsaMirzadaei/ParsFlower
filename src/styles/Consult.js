import styled from "styled-components";
import consultbg from "../img/consultbg.png";
import { theme } from "../Theme";

export const ConsultHolder = styled.div`
    width: 70%;
    min-height: 530px;
    border-radius: 30px;
    // background-image: url(${consultbg});
    background-color: ${theme.yellow};
    background-position: center;
    background-size: cover;
    position: relative;

    p{
        text-align: center;
        position: absolute;
        top : 30%;
        left: 50%;
        transform: translateX(-50%);
        width: 70%;
    }

    button{
        position: relative;
        left: 50%;
        transform: translate(-50%,700%);
    }

    div{
        position: absolute;
        left: 90%;
    }

    img{
        width: 320px;
        border-radius: 30px;
    }
`