# react-ant-input-number
> Input number for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: noop
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-ant-input-number --registry=https://registry.npm.taobao.org
```

```js
import ReactAntInputNumber from 'react-ant-input-number';
```

```scss
// customize your styles:
$react-ant-input-number-options:(
);

@import 'node_modules/react-ant-input-number/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-ant-input-number --save
// import : import ReactAntInputNumber from 'react-ant-input-number'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    console.log(e.target.value)
  };

  render(){
    return (
      <div className="hello-react-ant-input-number">
        <ReactAntInputNumber onChange={this._onChange} ref='rc' />
      </div>
    );
  }
}

```
