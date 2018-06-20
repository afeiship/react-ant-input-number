import './dev.scss';
import ReactAntInputNumber from './main';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
