# react-ant-input-number
> Input number for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-input-number
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-input-number/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-input-number/dist/style.scss";

  // customize your styles:
  $react-ant-input-number-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntInputNumber from '@jswork/react-ant-input-number';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-input-number/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-input-number/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-input-number
[version-url]: https://npmjs.org/package/@jswork/react-ant-input-number

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-input-number
[license-url]: https://github.com/afeiship/react-ant-input-number/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-input-number
[size-url]: https://github.com/afeiship/react-ant-input-number/blob/master/dist/react-ant-input-number.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-input-number
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-input-number
