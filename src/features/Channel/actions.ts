import { ArtItem } from "./state";

/**
 * An action which adds artworks to the image channel
 */
type AddArt = {
  type: "Channel.addArt";
  items: ArtItem[];
};

/**
 * The action types which are used to transform the state
 * for a `Channel` component.
 *
 * @see `channelReducer` for the state machine and transitions.
 */
export type ChannelAction = AddArt;
