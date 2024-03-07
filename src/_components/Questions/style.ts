import styled from "styled-components";

export const Questions = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const Input = styled.input`
    display: none;

    &:checked ~ Label {
        background-color: #fb8500;
    }
`;

export const Label = styled.label`
    background-color: #ffd97d;
    flex: 1;
    padding: 15px;
    font-size: 20px;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;

    &:Hover,
    &:focus {
        background-color: #fb8500;
    }
`;
