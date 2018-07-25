import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { InputNumber } from 'antd';
import noop from 'noop';
import { returnEventTarget } from 'next-return-event';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: noop
  };
  /*===properties end===*/

  _onChange = inEvent => {
    const { onChange } = this.props;
    onChange(returnEventTarget(inEvent) );
  };

  render(){
    const { className, onChange, ...props } = this.props;
    return (
      <InputNumber onChange={this._onChange} className={classNames('react-ant-input-number',className)} {...props} />
    );
  }
}
