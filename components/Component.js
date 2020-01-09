import store from '../store/index.js';

export default class Component {
  constructor(store, anchor) {
    this.anchor = anchor;
    this._render_ = this.render.bind(this);
    store.events.subscribe(this._render_);
  }

  onDestroy() {
    store.events.unsubscribe(this._render_);
    document.getElementById('app').innerHTML = '';
  }
}