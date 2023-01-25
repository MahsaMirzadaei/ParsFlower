import styled from "styled-components";
import { theme } from "../Theme";

export const CartContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const CartStyle = styled.div`

    .end-line{
        height: 2px;
        background-image: linear-gradient(to right, rgba(255,0,0,0), ${theme.hotPink},rgba(255,0,0,0));
    }

    .more-info{
        margin: 5px 0 ;
        display: flex;
        justify-content: space-between;

        p{
            margin-top:15px;
        }
    }
`
