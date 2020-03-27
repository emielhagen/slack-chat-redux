import { FETCH_MESSAGES, MESSAGE_POSTED } from '../actions'

export default function(state, action) {
  if(state === undefined) {
    return [];
  }

  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload
    case MESSAGE_POSTED:
      let copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    default:
      return state;
  }
}
