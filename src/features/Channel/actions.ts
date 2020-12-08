import { ArtItem } from "./state";

/**
 * An action which loads artworks to the image channel
 */
type LoadArt = {
  type: "Channel.loadArt";
  items: ArtItem[];
};

/**
 * An action which adds artworks to the favorites list
 */
type AddArt = {
  type: "Channel.addArt";
  item: ArtItem;
};

/**
 * The action types which are used to transform the state
 * for a `Channel` component.
 *
 * @see `channelReducer` for the state machine and transitions.
 */
export type ChannelAction = AddArt | LoadArt;
