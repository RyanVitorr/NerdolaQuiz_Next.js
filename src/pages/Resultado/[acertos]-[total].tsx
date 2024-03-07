"use client";
import React from 'react';
import '../../app/globals.css';
import * as C from './styles';
import { useRouter } from 'next/router';
import { Card } from '../../_components/Card/index';

export default function Resultado()  {
    const router = useRouter();
    const { acertos, totalQuestions } = router.query;

    console.log(acertos);
    console.log(totalQuestions);

    return (
        <C.Main>
            <C.Section>
                
                <Card titlePrincipal='Parabéns por finalizar o NerdolaQuiz'>

                    <C.Container>
                        <C.H1>
                            Você acertou <C.Color>{acertos}</C.Color> de <C.Color>{totalQuestions}</C.Color>
                        </C.H1>
                    </C.Container>

                </Card>
                

            </C.Section>
        </C.Main>
    )
}