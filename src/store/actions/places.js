import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  UNSELECT_PLACE,
  LIKE_PLACE,
  DISLIKE_PLACE
} from './constants'

export const addPlace = placeName => ({
  type: ADD_PLACE,
  payload: placeName
})

export const deletePlace = placeKey => ({
  type: DELETE_PLACE,
  payload: placeKey
})

export const selectPlace = placeKey => ({
  type: SELECT_PLACE,
  payload: placeKey
})

export const unselectPlace = placeKey => ({
  type: UNSELECT_PLACE,
  payload: placeKey
})

export const likePlace = placeKey => ({
  type: LIKE_PLACE,
  payload: placeKey
})

export const dislikePlace = placeKey => ({
  type: DISLIKE_PLACE,
  payload: placeKey
})
