import React, { Component } from 'react';
import List from './components/List';
import './styles/main.styl';

class App extends Component {
  render() {
    return (
      <div className="office">
        <div className="office__col">
          <List />
        </div>
        <div className="office__col">

        </div>
      </div>
    );
  }
}

export default App;
