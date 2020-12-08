import { ChannelState } from "./state";
import { ChannelAction } from "./actions";

/**
 * The initial state used by `shellReducer`.
 */
export const initialChannelState: ChannelState = {
  items: [],
  favorites: [],
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
    case "Channel.loadArt":
      return { ...state, items: action.items };

    case "Channel.addArt":
      const artworkId = action.item.id;

      const updated = state.favorites.includes(artworkId)
        ? state.favorites.filter((fav) => fav != artworkId)
        : [...state.favorites, artworkId];

      return { ...state, favorites: updated };
    default:
      return state;
  }
}
