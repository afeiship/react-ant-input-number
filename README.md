# react-ant-input-number
> Input number for react.

## installation
```shell
npm install -S @feizheng/react-ant-input-number
```

## update
```shell
npm update @feizheng/react-ant-input-number
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| onChange  | func   | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-input-number/dist/style.scss";

  // customize your styles:
  $react-ant-input-number-options: ()
  ```
2. import js
  ```js
  import ReactAntInputNumber from '@feizheng/react-ant-input-number';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-input-number/
