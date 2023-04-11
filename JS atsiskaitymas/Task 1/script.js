/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
alert('Nevertinkite,prašau,labai griežtai...')
const form = document.querySelector('form');
const input = document.querySelector('#search');
const output = document.querySelector('#output');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const kg = parseFloat(input.value); 
  if (isNaN(kg)) { 
    output.textContent = "Įveskite tinkamą numerį.";
    return;
  }
  const lb = kg * 2.2046;
  const g = kg / 0.0010000;
  const oz = kg * 35.274;
  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }
  
  const title = document.createElement('p');
  title.textContent = kg + " kg atitinka:";
  
  const list = document.createElement('ul');
  
  const lbItem = document.createElement('li');
  lbItem.textContent = lb.toFixed(2) + " lb";
  
  const gItem = document.createElement('li');
  gItem.textContent = g.toFixed(2) + " g";
  
  const ozItem = document.createElement('li');
  ozItem.textContent = oz.toFixed(2) + " oz";
  
  list.appendChild(lbItem);
  list.appendChild(gItem);
  list.appendChild(ozItem);
  
  output.appendChild(title);
  output.appendChild(list);
});