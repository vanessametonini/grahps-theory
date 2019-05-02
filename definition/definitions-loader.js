;(() => {
  const elDefinitionList = document.querySelector('.definition-list');

  const definitionsInserter = ({ title, definition }, dl) => {
    const tuple = `<div><dt>${title}</dt><dd>${definition}</dd></div>`;
    dl.insertAdjacentHTML('afterbegin', tuple)
  }

  Object.defineProperty(window, 'definitionsInserter', {
    writable: false,
    value: definitionsInserter
  });

  fetch('./definitions.json')
    .then(res => res.json())
    .then(definitionList => {
      Array.from(definitionList).reverse().map(term => {
        definitionsInserter(term, elDefinitionList)
      })
    })

})()