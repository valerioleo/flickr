import axios from 'axios'

export const QUERY_PHOTO_REQUEST = 'QUERY_PHOTO_REQUEST'
export const QUERY_PHOTO_SUCCESS = 'QUERY_PHOTO_SUCCESS'
export const QUERY_PHOTO_FAILURE = 'QUERY_PHOTO_FAILURE'

const url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1'
var instance = axios.create({
  baseURL: url,
  timeout: 1000,
})

function fetchingData(bool) {
  return {
    type: QUERY_PHOTO_REQUEST,
    isFetching: bool
  }
}

export function queryPhotoFailure(error) {
    return {
        type: QUERY_PHOTO_FAILURE,
        error
    };
}

export function queryPhotoSuccess(items) {
    return {
        type: QUERY_PHOTO_SUCCESS,
        items
    };
}

export function fetchData() {
    return (dispatch) => {
        dispatch(fetchingData(true));
        instance.get()
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(fetchingData(false));
                return response;
            })
            .then((response) => {
              return response.data.items
            })
            .then((items) => dispatch(queryPhotoSuccess(items)))
            .catch((e) => {
              console.log(e);
              dispatch(queryPhotoFailure(e))
            });
    };
}

export const SELECTED_IMAGE = 'SELECTED_IMAGE'

export function selectImage(image) {
  return {
    type: SELECTED_IMAGE,
    image
  }
}
