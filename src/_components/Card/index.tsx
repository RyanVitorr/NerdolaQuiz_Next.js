"use client";
import { Children } from 'react';
import * as C from './style';

type Props = {
    children?: React.ReactNode;
    titlePrincipal: string;
}

export const Card = ({ children, titlePrincipal }:Props ) => {
    return (
        <C.ContainerCard>
            <C.Container>
                <C.TitleCard>{titlePrincipal}</C.TitleCard>
            </C.Container>

            <C.Container>
                {children}
            </C.Container>
        </C.ContainerCard>
    );
}