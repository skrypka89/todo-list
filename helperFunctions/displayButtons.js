export default function displayButtons(LIElements) {
  LIElements.forEach(li => {
    const handleEvent = (event) => {
      if (event.type == 'mouseover') {
        li.querySelector('.remove-item-button').style.display = 'inline';
        li.querySelector('.do-item-button').style.display = 'inline';
      }

      if (event.type == 'mouseout') {
        li.querySelector('.remove-item-button').style.display = 'none';
        li.querySelector('.do-item-button').style.display = 'none';
      }
    };
    
    li.addEventListener('mouseover', handleEvent);
    li.addEventListener('mouseout', handleEvent);
  });
}