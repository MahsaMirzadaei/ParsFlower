import styled from "styled-components";
import {theme} from '../Theme'
   
export const Box = styled.div`
  padding: 80px 60px;
//   background: black;
  width: 100%;
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 900px) {
    grid-template-columns: repeat(2,
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #000;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  display: -webkit-box;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #000;
  margin-bottom: 40px;
  font-weight: bold;
`;