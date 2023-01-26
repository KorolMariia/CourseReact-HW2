import { Component } from 'react';
import PostList from './components/PostList/PostList';
import { getData, removePost, editPost } from './api/api';

export default class App extends Component {
  state = {
    postList: [],
  };

  componentDidMount() {
    (async () => {
      const { data } = await getData();
      this.setState({ postList: data });
    })();
  }

  removePost = (id) => {
    (async () => {
      await removePost(id);
    })();
    const newPostList = this.state.postList.filter((post) => post.id !== id);
    this.setState({ postList: newPostList });
  };

  editPost = (id, newTitle) => {
    (async () => {
      await editPost(id, newTitle);
    })();
    const newPostList = this.state.postList.map((post) =>
      post.id === id ? { ...post, title: newTitle } : post,
    );
    this.setState({ postList: newPostList });
  };

  render() {
    const { postList } = this.state;

    return (
      <>
        <PostList
          postList={postList}
          removePost={this.removePost}
          editPost={this.editPost}
        />
      </>
    );
  }
}
