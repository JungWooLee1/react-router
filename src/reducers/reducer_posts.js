import { FETCH_POSTS } from "../actions";
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action, type) {
    case FETCH_POSTS :
      // {id :4, title, "hi"}, {id: 5, title: "good-bye"} 등을 key를 id로 가지도록 변환 => ex) {"4" : {id: 4, title: "hi},.... }
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}