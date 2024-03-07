"use client";
import React from 'react';
import * as C from './pageStyle';
import { Card } from '../_components/Card/index';
import Link from 'next/link';

export default function Page() {
  return (
    <C.Main>
      <C.Section>

        <C.Container>
          <Card titlePrincipal='NerdolaQuiz'>
            <C.Container>
              <C.Text>Teste seus conhecimentos sobre o mundo Geek/Otaku e diverta-se jogando o NerdolaQuiz.</C.Text>
            </C.Container>

            <C.Container>
              <Link rel="stylesheet" href="/Game">
                <C.Button>Jogar</C.Button>
              </Link>
            </C.Container>
          </Card>
        </C.Container>

      </C.Section>
    </C.Main>

  );
}
