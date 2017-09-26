// dependencies
import React, { Component } from 'react';
import logo from './logo.svg';

// components
import Counter from './components/Counter';

// redux
import store from './store';

// styles
import './App.css';

class App extends Component {
  render() {
    const counters = store.getState().map((counter, index) => 
      <Counter
        key={index}
        count={store.getState()[index]}
        onIncrement={() =>
          store.dispatch({type: 'INCREMENT', index})
        }
        onDecrement={() =>
          store.dispatch({type: 'DECREMENT', index})
        }
        onRemove={() => 
          store.dispatch({type: 'REMOVE_COUNTER', index})
        } />
    );

    return (
      <div className="App">
        {counters}
        <div>
          <button onClick={() => 
            store.dispatch({type: 'ADD_COUNTER'})}>Create Counter</button>
        </div>
      </div>
    );
  }
}

export default App;
