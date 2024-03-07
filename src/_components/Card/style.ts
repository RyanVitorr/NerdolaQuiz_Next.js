import styled from "styled-components";
import '../../app/globals.css';

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 450px;
    border: 1px solid #EAAA54;
    border-radius: 8px;
    overflow: hidden;
`;

export const Container = styled.div`
    flex: 1;
    width: 100%;
    background-color: #fcbf49;
`;

export const TitleCard = styled.h2`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 10px;
    text-align: center;
    background-color: #fb8500;
  
    @media (min-width: 450px) {
        padding: 25px;
    }
`;