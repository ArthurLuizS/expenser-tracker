import {Item} from '../types/Item'


/* Arquivos que serão pré carregados na aplicação, simulando um
DataBase */

export const items : Item[]= [
    {date: new Date(2021, 9, 15), category: 'food', title: 'McDonalds', value: 40.8},
    {date: new Date(2021, 10, 14), category: 'food', title: 'Subway', value: 25},
    {date: new Date(2021, 10, 9), category: 'rent', title: 'Aluguel apt', value: 800},
    {date: new Date(2021, 10, 15), category: 'salary', title: 'Salário Tex', value: 4000},
]