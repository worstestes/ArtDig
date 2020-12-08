import { ChannelState } from "./state";
import { ChannelAction } from "./actions";

/**
 * The initial state used by `shellReducer`.
 */
export const initialChannelState: ChannelState = {
  items: [],
};

/**
 * A pure function which takes the current `state` and an `action` and transforms
 * the channel `state`.
 */
export function channelReducer(
  state: ChannelState = initialChannelState,
  action: ChannelAction
): ChannelState {
  switch (action.type) {
    case "Channel.addArt":
      console.log(action.items);
      return { ...state, items: action.items };
    default:
      return state;
  }
}
