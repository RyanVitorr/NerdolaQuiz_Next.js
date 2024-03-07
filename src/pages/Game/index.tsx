"use client";
import { useEffect, useState } from 'react';
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import '../../app/globals.css';
import * as C from './pageStyle';
import { Card } from '../../_components/Card/index';
import { Questions } from '../../_components/Questions'
import { questionList } from '../../data/data';
import { AlternativesType } from '@/types/AlternativesType';


type Event = FormEvent<HTMLFormElement>;
type ResponseType = keyof typeof responseStates;

const responseStates = {
  DEFAULT: "DEFAULT",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS"
} as const;

export default function Game() {
  const router = useRouter();
  /* lista */
  const [list, setList] = useState<AlternativesType[]>(questionList);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const question = list[currentQuestion];

  /* dados */
  const [responseState, setResponseState] = useState<ResponseType>(responseStates.DEFAULT);
  const totalQuestions = questionList.length
  const isLastQuestion = currentQuestion + 1 === list.length;
  const [acertos, setAcertos] = useState<number>(0);

  
  useEffect(()=> {
    if (isLastQuestion) {
      console.log(`valor de acertos no setTimeout = ${acertos}`);
      router.push(`/Resultado/index?acertos=${acertos}&totalQuestions=${totalQuestions}`);
    }
  },[acertos]);

  const handleSubmit = (event: Event) => {
    event.preventDefault()
    const $questionInfo = event.target as HTMLFormElement;
    const formData = new FormData($questionInfo);
    const alternative = formData.get('alternative');

    const isCorrectResponse = alternative === question.response;
    if (isCorrectResponse) {
      setResponseState(responseStates.SUCCESS);
      setAcertos(prevAcertos => {
        const newAcertos = prevAcertos + 1;
        console.log(`valor de acertos no isCorrect = ${newAcertos}`);
        return newAcertos;
      });
    } else {
      (!isCorrectResponse)
      setResponseState(responseStates.ERROR);
      console.log('errou');
    }

    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
      setResponseState(responseStates.DEFAULT);
    }, 2 * 1000);
  };

  return (
    <C.Main>
      <C.Section>
        <C.Container>

          <Card titlePrincipal={`Pergunta ${currentQuestion + 1} de ${list.length}`}>
            <C.Container>
              <C.TitleQuestion>
                {question.title}
              </C.TitleQuestion>
            </C.Container>

            <C.Container>
              <C.Form
                onSubmit={handleSubmit}>

                <C.Container>
                  {question.alternatives.map((option, index) => (
                    <Questions key={index} option={option} index={index} />
                  ))}
                </C.Container>


                <C.Container>
                  {responseState === responseStates.DEFAULT && (
                    <C.Button>
                      Confirmar
                    </C.Button>
                  )}
                  {responseState === responseStates.ERROR && (
                    <C.Emoji>❌</C.Emoji>
                  )}
                  {responseState === responseStates.SUCCESS && (
                    <C.Emoji>✅</C.Emoji>
                  )}

                </C.Container>
              </C.Form>

            </C.Container>

          </Card>

        </C.Container>
      </C.Section>
    </C.Main>
  );
}
