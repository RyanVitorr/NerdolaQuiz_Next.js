"use client";
import React from 'react';
import * as C from './style';

type Props = {
    option: string;
    index: number;
}

export const Questions = ({ option, index }: Props) => {
    const id = `alternative-${index}`;
    return (

        <C.Questions>
            <C.Input
                type='radio'
                name='alternative'
                id={id}
                defaultValue={index}>
            </C.Input>

            <C.Label htmlFor={id}>

                {option}
            </C.Label>
        </C.Questions>

    );
}