; (() => {
  const elDefinitionList = document.querySelector('.definition-list');
  const form = document.querySelector('form');

  const filtrar = (event) => {
    event.preventDefault();
  }

  form.addEventListener('submit', event => event.preventDefault());
  filtro.addEventListener('input', filtrar);
})()