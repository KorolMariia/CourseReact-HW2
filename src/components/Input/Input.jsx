import { Component } from 'react';
import './Input.scss';

export default class Input extends Component {
  render() {
    const { addNewTitle } = this.props;

    return (
      <div className="PostItem_modal">
        <input
          type="text"
          onChange={addNewTitle}
          className="PostItem_modal-input"
          placeholder="Enter a new title"
          autoFocus={true}
        />
      </div>
    );
  }
}
