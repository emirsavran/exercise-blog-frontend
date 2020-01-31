export const FETCH_POSTS_BEGIN = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts },
});

export const fetchPostsFailure = () => ({
  type: FETCH_POSTS_FAILURE,
});

export function fetchPosts(id = null) {
  return async (dispatch) => {
    dispatch(fetchPostsBegin());

    try {
      let url = 'http://localhost:3001/posts';

      // if id exists, then fetch only one
      if (id) {
        url += `/${id}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        // fetch doesn't throw any error for HTTP 404 etc.
        throw new Error();
      }

      const posts = await response.json();
      dispatch(fetchPostsSuccess(Array.isArray(posts) ? posts : [posts]));
    } catch {
      dispatch(fetchPostsFailure());
    }
  };
}
