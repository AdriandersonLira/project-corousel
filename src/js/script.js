document.querySelector('#items')
  .addEventListener('wheel', event => {
    event.deltaY < 0
    ? event.target.scrollBy(300, 0) 
    : event.target.scrollBy(-300, 0)
  });