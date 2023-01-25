import styled from "styled-components";
import {theme} from '../Theme'

export const Title = styled.h2`
    text-align : center;
    margin : 0 0 80px 0;
    font-weight: bold;
`
export const Button = styled.button`
    padding: 10px 20px;
    margin 10px 0px;
    height: 100%;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 30px;
    border: solid 1px ;
    // background-color: ${theme.hotPink};

    :hover{
        box-shadow: ${theme.yellow} 1px 1px 3px;
    }
`

export const ColumnsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    display: block;
    margin: auto;
    padding: 100px 50px 0 50px;
    overflow-x: hidden;
`

