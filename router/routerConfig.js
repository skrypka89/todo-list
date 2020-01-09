import ListComponent from "../components/ListComponent.js";
import LoginComponent from "../components/LoginComponent.js";
//import store from "./store/index.js";

export default {
  'login': {
    data: { route: 'login' },
    url: 'login',
    component: LoginComponent,
    settings: {
      redirect: 'list'
      //handleLogIn: () => store.dispatch.bind(this, 'login')
    }
  },
  'list': {
    data: { route: 'list' },
    url: 'list',
    component: ListComponent,
    settings: {}
  }
};