import {
  FETCH_POSTS_BEGIN, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE,
} from './postActions';

const initialState = {
  postsById: {},
  allIds: [],
  loading: false,
  error: false,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_POSTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_POSTS_SUCCESS: {
      const postsById = {};
      const allIds = [];

      payload.posts.forEach((post) => {
        allIds.push(post.id);
        postsById[post.id] = post;
      });

      return {
        ...state,
        loading: false,
        postsById,
        allIds,
      };
    }
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        // just set error as true for simplicity's sake
        error: true,
      };
    default:
      return state;
  }
}
