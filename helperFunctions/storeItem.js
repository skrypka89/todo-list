import store from "../store/index.js";

export default function storeItem(actionType, input, id) {
  const value = input.value.trim();

  if (!value.length) return;

  if (actionType == 'addItem') {
    store.dispatch('addItem', value);
    input.value = '';
    input.focus();
  }

  if (actionType == 'editItem') {
    store.dispatch('editItem', { value, id });
  }
}