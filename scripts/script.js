const calculatorKeys = () => {
  let makingNumber = '';
  let lastCalculator = '';
  let clickedButtons = [0];

  const allKeyboardButtons = document.querySelectorAll('.container__button');
  const historyPanel = document.querySelector('.container__history--items');

  allKeyboardButtons.forEach((item) => {
    item.addEventListener('click', (event) => {
      if (event.target.id === 'AC') {
        makingNumber = '';
        lastCalculator = '';
        clickedButtons = [0];
        historyPanel.innerHTML = 'Hello there!';
        document.querySelector('.container__result--item').innerHTML = 0.0;
      } else if (event.target.id === 'positive-negative') {
        clickedButtons.push('positive-negative');
      } else if (event.target.id === 'percentage') {
        clickedButtons = [parseFloat(makingNumber) / 100];
        makingNumber = clickedButtons[0];

        lastCalculator = '';
      } else if (event.target.id === 'button0') {
        makingNumber += '0';
      } else if (event.target.id === 'button1') {
        makingNumber += '1';
      } else if (event.target.id === 'button2') {
        makingNumber += '2';
      } else if (event.target.id === 'button3') {
        makingNumber += '3';
      } else if (event.target.id === 'button4') {
        makingNumber += '4';
      } else if (event.target.id === 'button5') {
        makingNumber += '5';
      } else if (event.target.id === 'button6') {
        makingNumber += '6';
      } else if (event.target.id === 'button7') {
        makingNumber += '7';
      } else if (event.target.id === 'button8') {
        makingNumber += '8';
      } else if (event.target.id === 'button9') {
        makingNumber += '9';
      } else if (event.target.id === 'dot') {
        makingNumber += '.';
      } else if (
        event.target.id === 'delete' ||
        event.target.id === 'delete-span'
      ) {
        if (makingNumber.length > 1) {
          let fixNumber = makingNumber.split('');
          fixNumber.pop();
          makingNumber = fixNumber.join('');
        } else {
          makingNumber = '';
          historyPanel.innerHTML = '0';
        }
      } else if (event.target.id === 'division') {
        if (lastCalculator === '/') {
          // if you need to divide before pressing the result button
          clickedButtons = [clickedButtons[0] / parseFloat(makingNumber)];
        } else if (lastCalculator === '*') {
          // if the last calculation was a multiplication and you need to divide a number to it
          clickedButtons = [clickedButtons[0] * parseFloat(makingNumber)];
        } else if (lastCalculator === '+') {
          // if the last calculation was a addition and you need to multiply a number to it
          clickedButtons = [clickedButtons[0] + parseFloat(makingNumber)];
        } else if (lastCalculator === '-') {
          // if the last calculation was a subtraction and you need to multiply to it
          clickedButtons = [clickedButtons[0] - parseFloat(makingNumber)];
        } else {
          if (lastCalculator === '') {
            clickedButtons[0] = parseFloat(makingNumber);
          }
          clickedButtons = [parseFloat(makingNumber)];
        }
        makingNumber = '';
        lastCalculator = '/';
      } else if (event.target.id === 'multiplication') {
        if (lastCalculator === '*') {
          // if you need to multiply before pressing the result button
          clickedButtons = [clickedButtons[0] * parseFloat(makingNumber)];
        } else if (lastCalculator === '+') {
          // if the last calculation was a addition and you need to multiply a number to it
          clickedButtons = [clickedButtons[0] + parseFloat(makingNumber)];
        } else if (lastCalculator === '-') {
          // if the last calculation was a subtraction and you need to multiply to it
          clickedButtons = [clickedButtons[0] - parseFloat(makingNumber)];
        } else {
          if (lastCalculator === '') {
            clickedButtons[0] = 1;
          }
          clickedButtons = [clickedButtons[0] * parseFloat(makingNumber)];
        }

        makingNumber = '';
        lastCalculator = '*';
      } else if (event.target.id === 'minus') {
        if (lastCalculator === '-') {
          // if you need to subtract before pressing the result button
          clickedButtons = [clickedButtons[0] - parseFloat(makingNumber)];
        } else if (lastCalculator === '+') {
          // if the last calculation was a addition and you need to subtract from it.
          clickedButtons = [clickedButtons[0] + parseFloat(makingNumber)];
        } else if (lastCalculator === '*') {
          clickedButtons = [clickedButtons[0] * parseFloat(makingNumber)];
        } else if (lastCalculator === '/') {
          clickedButtons = [clickedButtons[0] / parseFloat(makingNumber)];
        } else {
          clickedButtons = [parseFloat(makingNumber)];
        }
        lastCalculator = '-';
        makingNumber = '';
      } else if (event.target.id === 'plus') {
        // if you need to add a number before pressing the result button
        if (lastCalculator === '+') {
          clickedButtons = [clickedButtons[0] + parseFloat(makingNumber)];
        } else if (lastCalculator === '-') {
          // if the last calculation was a subtraction and you need to subtract from it.
          clickedButtons = [clickedButtons[0] - parseFloat(makingNumber)];
        } else if (lastCalculator === '*') {
          clickedButtons = [clickedButtons[0] * parseFloat(makingNumber)];
        } else if (lastCalculator === '/') {
          clickedButtons = [clickedButtons[0] / parseFloat(makingNumber)];
        } else {
          clickedButtons = [parseFloat(makingNumber)];
        }

        makingNumber = '';
        lastCalculator = '+';
      } else if (event.target.id === 'equal') {
        if (makingNumber != '') {
          if (lastCalculator === '+') {
            clickedButtons = [clickedButtons[0] + parseFloat(makingNumber)];
            makingNumber = clickedButtons;
            lastCalculator = '';
          } else if (lastCalculator === '-') {
            clickedButtons = [clickedButtons[0] - parseFloat(makingNumber)];
            makingNumber = clickedButtons;
            lastCalculator = '';
          } else if (lastCalculator === '*') {
            clickedButtons = [clickedButtons[0] * parseFloat(makingNumber)];
            makingNumber = clickedButtons;
            lastCalculator = '';
          } else if (lastCalculator === '/') {
            clickedButtons = [clickedButtons[0] / parseFloat(makingNumber)];
            makingNumber = clickedButtons;
            lastCalculator = '';
          }
        }

        document.querySelector('.container__result--item').innerHTML =
          clickedButtons;

        historyPanel.innerHTML = 'Result &#8595;';
      }

      if (makingNumber !== '' && makingNumber !== clickedButtons) {
        //   History panel
        historyPanel.innerHTML = makingNumber;
      }
    });
  });

  return clickedButtons;
};

calculatorKeys();
