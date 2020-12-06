import { View } from "./state";

/**
 * An action which changes the view of the shell
 */
type ChangeView = {
  type: "Shell.changeView";
  view: View;
};

/**
 * The action types which are used to transform the state
 * for a `Shell` component.
 *
 * @see `shellReducer` for the state machine and transitions.
 */
export type ShellAction = ChangeView;
