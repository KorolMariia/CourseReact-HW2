import { Component } from 'react';
import './Button.scss';

export default class Button extends Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <input
        className="PostItem_btn"
        type="button"
        value={value}
        onClick={onClick}
      />
    );
  }
}
