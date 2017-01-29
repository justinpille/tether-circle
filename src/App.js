import React, { Component } from 'react';
import Pointer from './Pointer'


class App extends Component {

  state = {
    x: 0,
    y: 0,
    down: false,
    radius: 0,
  }

  setPos = (x, y) => {
    let radius = Math.sqrt(x*x + y*y)
    this.setState({x, y, radius})
  }

  setDown = (down) => {
    this.setState({down})
  }

  render() {

    return (
      <div className="App">
        <Pointer
          setPos={this.setPos}
          setDown={this.setDown}
        />
        <svg>
          <line
            stroke="black"
            x1="0"
            y1="0"
            x2={this.state.x}
            y2={this.state.y}
          />
          <circle
            stroke="black"
            fill="none"
            cx="0"
            cy="0"
            r={this.state.radius}
          />
        </svg>
      </div>
    );
  }
}

export default App;
