/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
  .then(response => response.json())
  .then(cars => {
    const output = document.querySelector('#output');
    cars.forEach(car => {
      const brand = car.brand;
      const models = car.models;
      const brandElement = document.createElement('div');
      brandElement.className = 'brand';
      const brandTitle = document.createElement('h2');
      brandTitle.textContent = brand;
      const modelsList = document.createElement('ul');
      models.forEach(model => {
        const modelElement = document.createElement('li');
        modelElement.textContent = model;
        modelsList.appendChild(modelElement);
      });
      brandElement.appendChild(brandTitle);
      brandElement.appendChild(modelsList);
      output.appendChild(brandElement);
    });
  })
  .catch(error => console.error(error));