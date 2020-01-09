import Observer from '../helperFunctions/Observer.js';

export default class Store {
  constructor(reducers) {
    this.reducers = reducers;
    this.state = {
      items: [],
      doneItems: [],
      route: {},
      userInfo: {}
    };
    this.events = new Observer();
  }

  dispatch(actionType, payload) {
    if (this.reducers[actionType]) {
      this.state = this.reducers[actionType](payload, this.state);
      this.events.next(this.state);
    }
  }
}