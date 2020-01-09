export default function createReducers() {
  return {
    addItem: (payload, state) => ({
      ...state,
      items: [ payload, ...state.items ]
    }),
    removeItem: (payload, state) => ({
      ...state,
      items: [
        ...state.items.slice(0, payload.id),
        ...state.items.slice(payload.id + 1, state.items.length)
      ]
    }),
    editItem: (payload, state) => ({
      ...state,
      items: [
        ...state.items.slice(0, payload.id), payload.value,
        ...state.items.slice(payload.id + 1, state.items.length)
      ]
    }),
    doItem: (payload, state) => ({
      ...state,
      doneItems: [ payload, ...state.doneItems ]
    }),
    undoItem: (payload, state) => ({
      ...state,
      doneItems: [
        ...state.doneItems.slice(0, payload.id),
        ...state.doneItems.slice(payload.id + 1, state.doneItems.length)
      ]
    }),
    changeRoute: (payload, state) => ({
      ...state,
      route: { payload }
    }),
    /* login: (payload, state) => ({
      ...state,
      userInfo: {
        authorized: true,
        ...payload
      }
    }),
    logout: (payload, state) => ({
      ...state,
      userInfo: {}
    }) */
  };
}