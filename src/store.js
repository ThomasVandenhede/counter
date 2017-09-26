import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// redux specific
import { createStore } from 'redux';
import count from './reducers/countReducer';

const store = createStore(count);

store.subscribe(() => {
  console.log(store.getState());
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
});

export default store;