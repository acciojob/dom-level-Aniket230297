window.addEventListener('DOMContentLoaded', (event) => {
      let element = document.querySelector('#level');
      let level = 0;

      while (element.parentNode !== null) {
        element = element.parentNode;
        level++;
      }

      const result = document.createElement('p');
      result.textContent = `The level of the element is: ${level}`;
      document.body.appendChild(result);
    });