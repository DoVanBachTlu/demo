import axios from 'axios';
import {TypeAction, BASE_URL} from '../utilities';

let fetching = false;

export const getPost = () => {
  return {
    type: TypeAction.FETCHING_POST,
  };
};

export const getPostSuccess = (newData, initialState) => {
  console.log('newData=>', newData);
  return {
    type: TypeAction.FETCHING_POST_SUCCESS,
    newData,
    initialState,
  };
};

export const getPostFailure = () => {
  return {
    type: TypeAction.ON_ERROR,
  };
};

export const emptyPostStore = () => {
  return {
    type: TypeAction.EMPTY_POST,
  };
};

export const firstfetchPostLoadMoreAction = () => {
  console.log('firstLoad=>>')
  try {
    console.log('firstLoad1=>>')
    return async dispatch => {
      console.log('firstLoad2=>>')
      const res = await axios.get(`${BASE_URL}/fb/v1/fb?page=1&limit=5`);
      console.log('resFirstAction=>', res)
      if (res.data) {
        dispatch({
          type: TypeAction.FIRST_FETCH_POST,
          payload: res.data,
        });
      } else {
        dispatch({
          type: TypeAction.ON_ERROR,
          payload: 'Unable to post action',
        });
      }
    };
  } catch (error) {
    console.log('error first fetch Post action', error);
    dispatch({
      type: TypeAction.ON_ERROR,
      payload: 'Unable to fetch post action',
    });
  }
};

export const fetchPostLoadMoreAction = (page, limit) => {
  try {
    console.log('page', page, limit);
    console.log('loopAction');
    return async (dispatch, getState) => {
      const state = getState();
      const dataFromReducer = state.postReducer.post;
      console.log('stateAction=>', state.postReducer.post);
      const response = await axios.get(
        `${BASE_URL}/fb/v1/fb?page=${page}&limit=${limit}`,
      );
      console.log('response', response);
      if (response.data) {
        // if (loadMore && dataFromReducer && dataFromReducer?.length === 0) {
        //   dispatch({
        //     type: TypeAction.FETCH_POST,
        //     payload: response.data,
        //   });
        // } else {
        //   dispatch({
        //     type: TypeAction.FETCH_POST,
        //     payload: [response.data[length - 1], ...dataFromReducer],
        //   });
        // }
        dispatch({
          type: TypeAction.FETCH_POST_LOADMORE,
          payload: response.data,
        });
      } else {
        dispatch({
          type: TypeAction.ON_ERROR,
          payload: 'Unable to post action',
        });
      }
    };
  } catch (err) {
    console.log('error fetchPost action', error);
    dispatch({
      type: TypeAction.ON_ERROR,
      payload: 'Unable to fetch post action',
    });
  }

  // console.log('action=>');
  // if (fetching) return Promise.reject(new Error('progressing'));
  // console.log('action1=>');
  // fetching = true;
  // console.log('action2=>');
  // try {
  //   return async (dispatch, getState) => {
  //     const state = getState();
  //     const response = await axios.get(
  //       `${BASE_URL}/fb/v1/fb?page=${page}&limit=${limit}`,
  //     );
  //     console.log('res=>>', response);
  //     if (response !== false) {
  //       console.log('start fetching action',
  //           state.postReducer.post.length);
  //       if (state.postReducer.post.length === 0) {
  //         dispatch(getPostSuccess(response.data[0]));
  //       } else {
  //         dispatch(getPostSuccess(response.data[0], state.postReducer.post));
  //         console.log(
  //           'state.postReducer.post',
  //           state.postReducer.post,
  //         );
  //       }
  //     }
  //   };
  // } catch (error) {
  //   console.log('error fetchPost action==>', error);
  //   dispatch({
  //     type: TypeAction.ON_ERROR,
  //     payload: 'error post action',
  //   });
  // }
};

export const emptyPost = () => {
  return dispatch => {
    dispatch(emptyPostStore());
  };
};

export const newPostAction = content => {
  console.log('newPostAction', content);
  return (dispatch, getState) => {
    const state = getState();
    axios
      .post(`${BASE_URL}/fb/v1/fb/`, {content})
      .then(response => {
        const dataFromReducer = state.postReducer.post;
        console.log('resNew=>', response);
        console.log('resNew1=>', state);
        dispatch({
          type: TypeAction.NEW_POST,
          payload: [response.data, ...dataFromReducer],
          // payload: dataFromReducer.unshift(response.data)
        });
        // dispatch(fetchPostLoadMoreAction());
      })
      .catch(error => {
        console.log('error new post action=>', error);
      });
  };
};

export const deletePostAction = id => {
  try {
    return async dispatch => {
      const res = await axios.delete(`${BASE_URL}/fb/v1/fb/${id}`);
      dispatch({
        type: TypeAction.DELETE_POST,
        payload: res.data,
      });
      // dispatch(fetchPostLoadMoreAction());
    };
  } catch (error) {
    console.log('delete post action error=>', error);
  }
  // return dispatch => {
  //   axios
  //     .delete(`${BASE_URL}/fb/v1/fb/${id}`)
  //     .then(response => {
  //       console.log('deleteAction=>>', response, id);
  //       dispatch({
  //         type: TypeAction.DELETE_POST,
  //         payload: id,
  //       });
  //       dispatch(fetchPostLoadMoreAction());
  //     })
  //     .catch(error => {
  //       console.log('error delete action=>', error);
  //     });
  // };
};

export const editPostAction = (id, content) => {
  console.log('contentEdit', content, id);
  try {
    return async dispatch => {
      const res = await axios.put(`${BASE_URL}/fb/v1/fb/${id}`, {content});
      console.log('resEdit=>', res);
      dispatch({
        type: TypeAction.EDIT_POST,
        payload: res.data,
      });
      // dispatch(fetchPostLoadMoreAction());
    };
  } catch (error) {
    console.log('edit post action error=>', error);
  }

  // return dispatch => {
  //   axios
  //     .put(`${BASE_URL}/fb/v1/fb/${id}`, {content})
  //     .then(response => {
  //       dispatch({
  //         type: TypeAction.EDIT_POST,
  //         payload: response.data,
  //       });
  //       dispatch(fetchPostLoadMoreAction());
  //     })
  //     .catch(error => {
  //       console.log('error edit action', error);
  //     });
  // };
};

export const likeAction = (id, like) => {
  console.log('likeActionaaaaaa', id);
  return async dispatch => {
    try {
      const res = await axios.put(`${BASE_URL}/fb/v1/fb/${id}`, {like});
      console.log('likeActionRes=>', res);
      dispatch({
        type: TypeAction.LIKE,
        payload: res.data,
      });
      // dispatch(fetchPostLoadMoreAction());
    } catch (error) {
      console.log('errorres=>', error);
    }
  };
};
