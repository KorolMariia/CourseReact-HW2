import { Component } from 'react';
import PostItem from '../PostItem/PostItem';
import './PostList.scss';

export default class PostList extends Component {
  render() {
    const { postList, removePost, editPost } = this.props;

    return (
      <ul className="PostList">
        {postList.map((item) => (
          <PostItem
            key={item.id}
            item={item}
            removePost={removePost}
            editPost={editPost}
          />
        ))}
      </ul>
    );
  }
}
