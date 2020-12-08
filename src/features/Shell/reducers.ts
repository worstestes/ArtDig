import { ShellState } from "./state";
import { ShellAction } from "./actions";

/**
 * The initial state used by `shellReducer`.
 */
export const initialShellState: ShellState = {
  view: "loggedOut",
};

/**
 * A pure function which takes the current `state` and an `action` and transforms
 * the shell `state`.
 */
export function shellReducer(
  state: ShellState = initialShellState,
  action: ShellAction
): ShellState {
  switch (action.type) {
    case "Shell.changeView":
      return { ...state, view: action.view };
    default:
      return state;
  }
}
