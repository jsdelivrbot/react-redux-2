import _ from 'lodash';
import {
  FETCH_POSTS,
  DELETE_POST,
  CREATE_POST
} from './types';

const INITIAL_POSTS = { 123: 'One Weird Trick...', 456: 'Bet you wanted to read this.'};

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
    payload: INITIAL_POSTS
  };
}

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: { [_.uniqueId()]: post }
  };
}

export function deletePost(key) {
  return {
    type: DELETE_POST,
    payload: key
  };
}
