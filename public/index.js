import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntInputNumber from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  handleChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-ant-input-number">
        <ReactAntInputNumber className="is-fullwidth mb-2" placeholder="Input your number." onChange={this.handleChange} />
        <ReactAntInputNumber
          className="is-fullwidth"
          defaultValue={100}
          min={0}
          max={100}
          formatter={(value) => `${value}%`}
          parser={(value) => value.replace('%', '')}
          onChange={this.handleChange}
        />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
