import _, {set, unionBy} from 'lodash';
import { TypeAction } from '../utilities';
const initialState = {
  post: [],
  isFetching: false,
  error: false,
};
const PostReducer = (state = initialState, action) => {
  console.log('state=>', action);
  switch (action.type) {
    case TypeAction.EMPTY_POST:
      console.log('post empty');
      return {
        ...state,
        data: [],
      };
    case TypeAction.FETCHING_POST:
      console.log('post fetching...');
      return {
        ...state,
        data: [],
        isFetching: true,
      };
    // case TypeAction.FETCHING_POST_SUCCESS:
    //   console.log('post fetching success')
    //   let concatResult = {};
    //   console.log('post fetching success1', state)
    //   // concatResult = state.post.concat(action.payload)
    //   concatResult.post = state.post.post.concat(action.newData)
    //   // concatResult.post = state.post.post.concat(...action.newData)
    //   // concatResult.total = action.newData.length
    //   console.log('concatResult=>', concatResult)
    //   console.log('concatResult.post=>', concatResult.post)
    //   console.log('action.newData=>', action.newData)
    //   console.log('state.post.post=>', state.post.post)
    //   console.log('...state.post.post=>', ...state.post.post.concat(action.newData))
    //   console.log('...state.post.post1=>', ...state.post.post.concat(...action.newData))
    //   return {
    //     ...state,
    //     post: concatResult,
    //     // post: [...state.post, ...action.payload],
    //     isFetching: false,
    //   };
    case TypeAction.FIRST_FETCH_POST:
      return {
        ...state,
        post: action.payload,
      };
    case TypeAction.FETCH_POST_LOADMORE:
      console.log('checkPositionLockLoadMore_2');
      return {
        ...state,
        // post: concatResult,
        post: _.uniqBy([...state.post, ...action.payload], 'id'),
        isFetching: false,
      };
    case TypeAction.ON_ERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case TypeAction.NEW_POST:
      console.log('setDataNewPost', [...action.payload, ...state.post]);
      return {
        ...state,
        post: _.uniqBy([...action.payload, ...state.post], 'id'),
      };
    case TypeAction.LIKE:
      return {
        ...state,
        post: [
          ...state.post.map(post => {
            if (post.id === action.payload.id) return action.payload;
            return post;
          }),
        ],
      };
    case TypeAction.DELETE_POST:
      return {
        ...state,
        post: [...state.post.filter(post => post.id !== action.payload.id)],
      };
    case TypeAction.EDIT_POST:
      const editPost = action.payload;
      console.log('editPostAAA=>', action);
      console.log('editPostBB=>', state);
      console.log('editPost=>', editPost);
      // return {...state, editPost};
      return {
        ...state,
        post: [
          editPost,
          ...state.post.filter(post => post.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};
export default PostReducer;
