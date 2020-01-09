import store from "../store/index.js";

export default function doItem(buttonElements) {
  buttonElements.forEach((button, id) => {
    const item = store.state.items[id];
    const li = button.parentNode;
    let doneItemIndex = null;
    let doneItem = null;

    if (store.state.doneItems.length) {
      store.state.doneItems.forEach((elem, index) => {
        if (elem === item) {
          doneItem = item;
          doneItemIndex = index;
        }
      });
    }

    if (doneItem) {
      li.querySelector('span').style.textDecoration = 'line-through';
      li.querySelector('.do-item-button').innerText = 'Undone';
    }

    button.addEventListener('click', () => {
      if (doneItem) {
        store.dispatch('undoItem', { id: doneItemIndex });
      } else {
        store.dispatch('doItem', item);
      }
    });
  });
}