import seed from '../../util/seedPlaces'
import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, UNSELECT_PLACE} from '../actions/constants'
import _ from 'lodash'
import { random } from 'faker'

const initialState = {
  places: seed(),
  selectedPlace: null
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

    default:
      return state
  }
}

export default reducer