import _ from 'lodash'
import { READ_EVENTS } from '../actions'

const reducer = (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}

export default reducer
