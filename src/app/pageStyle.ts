import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
`;

export const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Text = styled.p`
    flex: 1;
    text-align: center;
    font-weight: bold;
    padding: 15px 10px 0px;
`;

export const Button = styled.button`
    width: 120px;
    height: 30px;
    margin: 20px 0px;
    background-color: #fb8500;
    border-radius: 8px;
    border: none;
    box-shadow: 0px 0px 5px dark;
    font-size: 18px;
    cursor: pointer;
`;

