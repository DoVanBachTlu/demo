import {Action} from './actions';

const initialState = {
  post: [],
  postList: [],
};
const PostReducer = (state = initialState, action) => {
  console.log('state', action);
  switch (action.type) {
    case Action.GET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case Action.NEW_POST:
      return {
        ...state,
        postList: [...state.postList, action.payload],
      };
    case Action.LIKE:
      console.log('Action.LIKE', state.postList);
      return {
        ...state,
        post: [
          ...state.post.filter(post => post.id !== action.payload.id),
          action.payload,
        ],
      };
    case Action.DELETE_POST:
      return {
        ...state,
        postList: state.postList.filter(post => post.id !== action.payload.id),
      };
    case Action.EDIT_POST:
      const editPost = state.post.concat(action.payload);
      console.log('editPost=>', editPost);
      return {...state, editPost};
    default:
      return state;
  }
};
export default PostReducer;
