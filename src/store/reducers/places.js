import seed from '../../util/seedPlaces'
import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  UNSELECT_PLACE,
  LIKE_PLACE,
  DISLIKE_PLACE
} from '../actions/constants'
import _ from 'lodash'
import { random } from 'faker'

const samplePlaces = seed()
const samplePlace = samplePlaces[0]

const initialState = {
  places: samplePlaces,
  selectedPlace: samplePlace
}

/**
 * @param {array} places
 * @param {string} key
 * @description used for like/dislike type cases to update place object within places array
 */
const getUpdatedPlaces = (places, key, target) => {
  switch(target) {
    case 'like': return _.map(places, p => {
      return p.key === key ? _.assign(p, { likes: p.likes + 1 }) : p
    })

    case 'dislike': return _.map(places, p => {
      return p.key === key ? _.assign(p, { dislikes: p.dislikes + 1 }) : p
    })

    default: return places
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE: return {
      ...state,
      places: _.concat(state.places, { key: random.uuid(), name: action.payload })
    }

    case DELETE_PLACE: return {
      ...state,
      places: _.filter(state.places, p => p.key !== action.payload),
      selectedPlace: null
    }

    case SELECT_PLACE: return {
      ...state,
      selectedPlace: _.find(state.places, { key: action.payload })
    }

    case UNSELECT_PLACE: return {
      ...state,
      selectedPlace: null
    }

    case LIKE_PLACE: return {
      ...state,
      places: getUpdatedPlaces(state.places, action.payload, 'like')
    }

    case DISLIKE_PLACE: return {
      ...state,
      places: getUpdatedPlaces(state.places, action.payload, 'dislike')
    }

    default:
      return state
  }
}

export default reducer