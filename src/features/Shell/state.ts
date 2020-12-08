/**
 * The various views that the shell can transition between.
 */
export type View = "loggedOut" | "loggedIn";

/**
 * The state which is used to manage a `Shell` component.
 */
export interface ShellState {
  view: View;
}
