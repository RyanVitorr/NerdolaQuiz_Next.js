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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 10px;
   
`;

export const TitleQuestion = styled.h1`
    text-align: center;
    flex: 1;
    padding: 25px 10px 10px 10px;
    font-size: 18px;

    @media (min-width: 450px) {
        margin-bottom: 15px;
    }
`;

export const Form = styled.form`
    display: block;
    flex: 1;
    width: 100%;
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

export const Emoji = styled.span`
    flex: 1;
    text-align: center;
    margin: 2.5px 0px;
    padding: 10px;
    font-size: 30px;
`;