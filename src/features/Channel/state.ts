/**
 * An interface which represents an artwork.
 * An artwork is an artistic production created by an artist,
 * multiple artists or an artist collective
 */
export interface ArtItem {
  category: string;
  date: string;
  id: string;
  medium: string;
  title: string;
  imageLink: string;
}

/**
 * The state which is used to manage a `Channel` component.
 */
export interface ChannelState {
  /**
   * A collection of art items.
   */
  items: ArtItem[];

  /**
   * A collection of saved art items.
   */
  favorites: string[];
}
