import axios from 'axios';

const postAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export function getData() {
  return postAPI.get('/posts');
}

export function removePost(id) {
  return postAPI.delete(`/posts/${id}`);
}

export function editPost(id, title) {
  return postAPI.patch(`/posts/${id}`, {
    title: `${title}`,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
}
