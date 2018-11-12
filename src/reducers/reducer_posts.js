import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from "../actions";


export default function(state = {}, action) {
  switch (action.type) {

    case FETCH_POST :
      //const post = action.payload.data;
      //const newState = { ...state }; => ...은 가변인자를 말한다. ES6에서 {...state}는 0 : first, 1 : second .... 이런식으로 표현된
      //newState[post.id] = post;
      //return newState;
      return { ...state, [action.payload.data.id] : action.payload.data};
    case FETCH_POSTS :
      // {id :4, title, "hi"}, {id: 5, title: "good-bye"} 등을 key를 id로 가지도록 변환 => ex) {"4" : {id: 4, title: "hi},.... }
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}

