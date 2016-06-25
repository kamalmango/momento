import {
  SAVE_CLIP_DATA,
  UPDATE_VIDEO_LIST,
  SET_VIDEO_TITLE,
} from '../constants';

const initialState = {
  videosLoaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_CLIP_DATA:
      return Object.assign({}, state, { currentVideo: action.data });
    case SET_VIDEO_TITLE: {
      const newState = Object.assign({}, state);
      newState.currentVideo.title = action.title;
      return newState;
    }
    case UPDATE_VIDEO_LIST:
      return Object.assign(
        {}, state, { videos: action.videos, dataSource: action.dataSource, videosLoaded: true }
      );
    default:
      return state;
  }
}
