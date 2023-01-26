import { Component } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './PostItem.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class PostItem extends Component {
  state = {
    addInput: false,
    newTitle: '',
  };

  addInput = () => {
    this.setState({ addInput: !this.state.addInput });
  };

  addNewTitle = (event) => {
    this.setState({
      newTitle: event.target.value,
    });
  };

  render() {
    const { addInput, newTitle } = this.state;
    const { removePost, editPost } = this.props;
    const { id, title, body } = this.props.item;

    return (
      <li className="PostItem">
        <span className="PostItem_id">Post #{id}</span>
        <div className="PostItem_btns">
          {addInput && <Input addNewTitle={this.addNewTitle} />}
          {!addInput ? (
            <Button
              value={'Edit Post'}
              onClick={() => {
                this.addInput();
              }}
            />
          ) : (
            <Button
              value={'Ready'}
              onClick={() => {
                this.addInput();
                editPost(id, newTitle);
                toast.success(
                  `Operation completed successfully! You edited the title of the post #${id}`,
                );
              }}
            />
          )}
          <Button
            value={'Delete Post'}
            onClick={() => {
              removePost(id);
              toast.success(
                `Operation completed successfully! You deleted the post #${id}`,
              );
            }}
          />
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          pauseOnHover={false}
          theme="dark"
        />
        <img
          className="PostItem_img"
          src="https://source.unsplash.com/random/300x300/"
          alt="Random"
        />
        <h3 className="PostItem_title">{title}</h3>
        <p className="PostItem_body">{body}</p>
      </li>
    );
  }
}
