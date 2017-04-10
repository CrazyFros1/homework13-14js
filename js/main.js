'use strict';

   var tmpl = _.template(document.getElementById('test').innerHTML);
   var wrapper = document.getElementById('test-holder');
   wrapper.innerHTML = tmpl({list: test});

   var button = document.querySelector('.test_button');
   var checksArr = document.querySelectorAll('.ch');
   var answerArr = [];
   var answerCost = [];
   var maxAnswerCost = 0;
   var answerTrueCost = 0;

   for (var i = 1; i < test.length - 1; i++) {
       test[i].answer.forEach(function (item) {
           answerArr.push(item[1]);
           answerCost.push(+item[2]);
       })
   }

   button.onclick = function () {
       for (i = 0; i < answerArr.length; i++) {
          if (checksArr[i].checked === answerArr[i] && answerArr[i] === true) {
             answerTrueCost += answerCost[i];
             checksArr[i].parentElement.style.background = '#090'
          } else if (checksArr[i].checked !== answerArr[i] && answerArr[i] === false) {
              answerTrueCost -= 1;
              checksArr[i].parentElement.style.background = '#900'
          }
          if (isFinite(answerCost[i])) {
              maxAnswerCost += answerCost[i];
          }
       }
       createModal();
   };

   function createModal() {
       var modal = document.createElement('div');
       var modalHead = document.createElement('h2');
       var modalMessage = document.createElement('p');
       var modalButton = document.createElement('button');
       modal.classList.add('modal');
       modalHead.innerHTML = 'РЕЗУЛЬТАТ';
       modalMessage.innerHTML = 'Вы набрали ' + answerTrueCost + ' балов, из ' + maxAnswerCost + ' возможных!';
       modalButton.innerHTML = 'Готово';
       wrapper.appendChild(modal);
       modal.appendChild(modalHead);
       modal.appendChild(modalMessage);
       modal.appendChild(modalButton);
       modalButton.onclick = function () {
           wrapper.removeChild(modal);
           answerTrueCost = 0;
           maxAnswerCost = 0;
           for (i = 0; i < answerArr.length; i++) {
               checksArr[i].checked = false;
               checksArr[i].parentElement.removeAttribute('style');
           }
       }
   }