import {combineReducers} from 'redux'
import {QUERY_PHOTO_REQUEST, QUERY_PHOTO_FAILURE, QUERY_PHOTO_SUCCESS, SELECTED_IMAGE} from 'actions'

function isFetching(state = false, action) {
  switch (action.type) {
    case QUERY_PHOTO_REQUEST:
      return true
    case QUERY_PHOTO_SUCCESS:
    case QUERY_PHOTO_FAILURE:
      return false;

    default:
      return state;
  }
}

function items(state = [], action) {
  switch (action.type) {
    case QUERY_PHOTO_SUCCESS:
      return action.items;

    default:
      return state;
  }
}

function selectedImage(state = [], action) {
  switch (action.type) {
    case SELECTED_IMAGE:
      return action.image;

    default:
      return state;
  }
}

function errors(state = [], action) {
  console.log(action);
  switch (action.type) {
    case QUERY_PHOTO_FAILURE:
      return action.error

    default:
      return state;
  }
}

const rootReducer = combineReducers({items, isFetching, errors, selectedImage})

export default rootReducer
