export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // Remove after finished developing...
  // token:
  //   "BQAZYHd9zMJ5-EvPOHvzMcl-zxKEseOH9GDhLw6huYMWcBqfkizjAx8pXUrEiV99HZ2EP1X5hMWqaXggQ-bUJK1Wd2R-8xtU-8gt69DpOoBi0Bl3AMrKABwdYwYI7EDiJ284Rq_6KaGhYnV00IszZxmRo_w5t3usX7y-w9Iojtipicmy96wm",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }
    default:
      return state;
  }
};

export default reducer;
