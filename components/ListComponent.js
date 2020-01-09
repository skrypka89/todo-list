import Component from "./Component.js";
import store from "../store/index.js";
import removeItem from "../helperFunctions/removeItem.js";
import editItem from "../helperFunctions/editItem.js";
import storeItem from "../helperFunctions/storeItem.js";
import doItem from "../helperFunctions/doItem.js";
import displayButtons from "../helperFunctions/displayButtons.js";
//import filterItems from "../helperFunctions/filterItems.js";

export default class ListComponent extends Component {
  // eslint-disable-next-line no-unused-vars
  constructor(app, settings) {
    const template = document.getElementById('list').content.cloneNode(true);
    app.append(template);

    super(
      store,
      document.querySelector('.js-items')
    );

    const input = document.querySelector('.new-item-input');
    const submit = document.querySelector('.new-item-button');
    input.focus();

    submit.addEventListener('click', event => {
      event.preventDefault();
      storeItem('addItem', input);
    });
    input.addEventListener('keypress', event => {
      if (event.keyCode === 13) storeItem('addItem', input);
    });
  }

  render() {
    if (store.state.items.length === 0) {
      this.anchor.innerHTML = `No items`;
      return;
    }

    this.anchor.innerHTML = `
      <!-- <div class="item-filters">
        Filters
        <button class="all-filter-button">All</button>
        <button class="done-filter-button">Done</button>
        <button class="undone-filter-button">Undone</button>
      </div> -->
      <ul>
        ${store.state.items.map(todoItem => `
          <li>
            <span>${todoItem}</span>
            <button class="remove-item-button" style="display: none">X</button>
            <button class="do-item-button" style="display: none">Done</button>
          </li>
        `).join('')}
      </ul>
    `;
    
    //filterItems(this.anchor.querySelector('.item-filters'));
    editItem(this.anchor.querySelectorAll('li'));
    removeItem(this.anchor.querySelectorAll('.remove-item-button'));
    doItem(this.anchor.querySelectorAll('.do-item-button'));
    displayButtons(this.anchor.querySelectorAll('li'));
  }
}