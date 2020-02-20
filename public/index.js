import ReactAntInputNumber from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  handleChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="app-container">
        <div className="item">
          <ReactAntInputNumber onChange={this.handleChange} />
        </div>
        <div className="item">
          <ReactAntInputNumber
            defaultValue={100}
            min={0}
            max={100}
            formatter={(value) => `${value}%`}
            parser={(value) => value.replace('%', '')}
            onChange={this.handleChange}
          />
        </div>
        <div className="item">
          <ReactAntInputNumber
            defaultValue={100}
            min={0}
            max={100}
            formatter={(value) => `${value}%`}
            parser={(value) => value.replace('%', '')}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
