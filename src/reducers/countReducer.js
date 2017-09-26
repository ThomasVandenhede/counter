const count = (state=[], action) => {
  switch (action.type) {
    case 'INCREMENT':
      return [
        ...state.slice(0, action.index),
        state[action.index] + 1,
        ...state.slice(action.index + 1)
      ];
    case 'DECREMENT':
      return [
        ...state.slice(0, action.index),
        state[action.index] - 1,
        ...state.slice(action.index + 1)
      ];
    case 'ADD_COUNTER':
      return [...state, 0];
    case 'REMOVE_COUNTER':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ];
    default:
      return state;
    }
}

export default count;