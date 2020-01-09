import Component from "./Component.js";
import store from "../store/index.js";

export default class LoginComponent extends Component {
  constructor(app, settings) {
    const template = document.getElementById('login').content.cloneNode(true);
    app.appendChild(template);

    super(
      store,
      app
    );

    app.querySelector('#sign-in').addEventListener('click', () =>
      store.dispatch('changeRoute', settings.redirect)
    );
  }

  render() {
    console.log('login render');
  }
}