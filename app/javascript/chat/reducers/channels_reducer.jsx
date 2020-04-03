import { CHANNEL_POSTED } from '../actions'

export default function(state, action) {
  if(state === undefined) {
    return [];
  }
  switch (action.type) {
    case CHANNEL_POSTED:
      const copiedState = state.slice(0);
      copiedState.push(action.payload.name);
      return copiedState;
    default:
      return state;
  }
}
