'use strict';

var test = [
{
    top: 'Тест по програмимимированию'
},
{
    question: 'Вопрос №1',

        answer: [['Ответ 1', true, '1'], ['Ответ 2', false], ['Ответ 3', false]]
},
{
    question: 'Вопрос №1',

        answer: [['Ответ 1', true, '0.5'], ['Ответ 2', true, '0.5'], ['Ответ 3', false]]
},
{
    question: 'Вопрос №1',

        answer: [['Ответ 1', true, '1'], ['Ответ 2', false], ['Ответ 3', false]]
},
{
    button: 'Получить результат'
}
];

localStorage.setItem('test', JSON.stringify(test));

test = JSON.parse(localStorage.getItem('test'));