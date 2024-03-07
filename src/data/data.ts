import { useState } from 'react';
import { AlternativesType } from '../types/AlternativesType';

export const questionList: AlternativesType[] = [
    {
        title: 'Qual é o nome do vilão principal em Dragon Ball Z?',
        alternatives: [
            'Vegeta',
            'Freeza',
            'Cell',
            'Majin Buu'
        ],
        response: '1'
    },
    {
        title: 'Qual é o nome da técnica de Nen de Killua que lhe permite transformar seu corpo em eletricidade?',
        alternatives: [
            'Nen',
            'Thunder Palm',
            'Bankai',
            'Godspeed'
        ],
        response: '3'
    },
    {
        title: 'Qual é o nome do pai de Naruto, que foi considerado um dos maiores ninjas de todos os tempos?',
        alternatives: [
            'Jiraiya',
            'Tobirama Senju',
            'Minato Namikaze',
            'Hashirama Senju'
        ],
        response: '2'
    },
    {
        title: 'Qual é o nome do navio dos Piratas do Chapéu de Palha antes do Thousand Sunny?',
        alternatives: [
            'Red Force',
            'Sunny Go',
            'Oro Jackson',
            'Going Merry'
        ],
        response: '3'
    },
    {
        title: 'Qual é o nome da técnica de maldição usada por Megumi Fushiguro que permite convocar animais místicos?',
        alternatives: [
            'Cães do Inferno',
            'Besta Vermelha',
            'Sapo das Sombras',
            'Olho Maldito'
        ],
        response: '0'
    },
    {
        title: 'Qual é o nome do único Hashira que possui a habilidade de curar outros?',
        alternatives: [
            ' Giyu Tomioka',
            ' Mitsuri Kanroji',
            ' Shinobu Kocho',
            ' Sanemi Shinazugawa'
        ],
        response: '2'
    },
    {
        title: 'Quantos anos Takemichi Hanagaki tem no início da história de Tokyo Revengers?',
        alternatives: [
            '27 anos',
            '12 anos',
            '14 anos',
            '25 anos'
        ],
        response: '0'
    },
    {
        title: 'Qual é o apelido dado à Investigadora Ghoul mais poderosa, que se tornou conhecida por sua crueldade implacável?',
        alternatives: [
            ' Águia',
            ' Aranha',
            ' Coruja',
            ' Serpente'
        ],
        response: '2'
    },
    {
        title: 'Qual é o nome do grupo que tenta derrotar o Kirito e seus amigos no jogo Sword Art Online?',
        alternatives: [
            ' Fairy Dance Alliance',
            ' Knights of Blood',
            ' Aincrad Liberation Force',
            ' Laughing Coffin'
        ],
        response: '3'
    },
];

/*  {
        title: '',
        alternatives: [
            ' ',
            ' ',
            ' ',
            ' '
        ],
        response: ''
    }, */
