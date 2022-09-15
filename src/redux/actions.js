import axios from 'axios';
import {BASE_URL} from '../utilities';

export const Action = {
  GET_POST: 'fetch_post',
  NEW_POST: 'new_post',
  DELETE_POST: 'delete_post',
  EDIT_POST: 'edit_post',
  ON_ERROR: 'on_error',
  LIKE: 'like',
};

export const fetchPostAction = (page, limit) => {
  try {
    console.log('page', page, limit)
    return async dispatch => {
      const response = await axios.get(`${BASE_URL}/fb/v1/fb?page=${page}&limit=${limit}`);
      // const response = await axios.get(`${BASE_URL}/fb/v1/fb`);
      console.log('response', response);
      if (response.data) {
        dispatch({
          type: Action.GET_POST,
          payload: response.data,
        });
      } else {
        dispatch({
          type: Action.ON_ERROR,
          payload: 'Unable to post action',
        });
      }
    };
  } catch (err) {
    console.log('error fetchPost action', error);
    dispatch({
      type: Action.ON_ERROR,
      payload: 'Unable to fetch post action',
    });
  }
};
export const newPostAction = content => {
  return dispatch => {
    axios
      .post(`${BASE_URL}/fb/v1/fb/`, {content})
      .then(response => {
        dispatch({
          type: Action.NEW_POST,
          payload: response.data,
        });
        dispatch(fetchPostAction());
      })
      .catch(error => {
        console.log('error new post action=>', error);
      });
  };
};

export const deletePostAction = id => {
  return dispatch => {
    axios
      .delete(`${BASE_URL}/fb/v1/fb/${id}`)
      .then(response => {
        console.log('deleteAction=>>', response, id);
        dispatch({
          type: Action.DELETE_POST,
          payload: id,
        });
        dispatch(fetchPostAction());
      })
      .catch(error => {
        console.log('error delete action=>', error);
      });
  };
};

export const editPostAction = (id, content) => {
  console.log('content', content);
  console.log('id', id);
  return dispatch => {
    axios
      .put(`${BASE_URL}/fb/v1/fb/${id}`, {content})
      .then(response => {
        dispatch({
          type: Action.EDIT_POST,
          payload: response.data,
        });
        dispatch(fetchPostAction());
      })
      .catch(error => {
        console.log('error edit action', error);
      });
  };
};

export const likeAction = (id, like) => {
  console.log('likeActionaaaaaa');
  return async dispatch => {
    try {
      const res = await axios.put(`${BASE_URL}/fb/v1/fb/${id}`, {like});
      console.log('likeActionRes=>', dispatch);
      dispatch({
        type: Action.LIKE,
        payload: res.data,
      });
      // dispatch(fetchPostAction())
    } catch (error) {
      console.log('errorres=>', error);
    }
  };
};
