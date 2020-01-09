import storeItem from "./storeItem.js";

export default function editItem(LIElements) {
  let switcher = null;

  LIElements.forEach((li, id, arr) =>
    li.addEventListener('click', () => {
      const parent = li.parentNode;

      if (switcher) {
        const olderForm = parent.querySelector('form');
        const olderItem = arr[Number(switcher)];
        parent.replaceChild(olderItem, olderForm);
      }

      switcher = String(id);
      const text = li.querySelector('span').innerText;
      const form = document.createElement('form');
      form.innerHTML = `
        <div>
          <input type="text" value="${text}">
          <button class="edit-item-button">Change item</button>
        </div>
      `;
      li.parentNode.replaceChild(form, li);
      form.querySelector('input').focus();

      const button = parent.querySelector('.edit-item-button');
      const input = parent.querySelector('input');

      const handleEvent = (event) => {
        if (event.type == 'click') event.preventDefault();
        
        if ((event.type == 'click') ||
          (event.type == 'keypress' && event.keyCode == 13)) {
          storeItem('editItem', input, id);
        }
      };

      button.addEventListener('click', handleEvent);
      input.addEventListener('keypress', handleEvent);
    })
  );
}