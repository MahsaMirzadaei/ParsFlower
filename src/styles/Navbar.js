import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    padding: 25px 30px 10px 30px;
    z-index: 100;
    position: fixed;
    top: 0;
    transition: ease-out .2s;
    display: flex;
    justify-content: space-between;

    div{
        display: flex;
    }
`
export const LinkText = styled.p`
    color: black;
    text-decoration: none ;
    margin: 0px 10px;

    :hover{
        text-decoration: underline ; 
    }  
    
`
export const NavLogo = styled.h2`
    // 

`
export const IconHolder = styled.div`
    display: flex;
    font-size: 2rem;
    curser: pointer;
    span{
        margin: 0px 30px;
    }
`
