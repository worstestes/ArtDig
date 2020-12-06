import React from "react";
import * as Redux from "redux";
import { Provider } from "react-redux";
import { ShellState, ShellAction, shellReducer } from "./Shell";
import Shell from "./Shell";

/**
 * The `shellReducer` wrapped in a `Redux.Reducer`.
 */
const reduxShellReducer: Redux.Reducer<ShellState, ShellAction> = (
  state,
  action
) => shellReducer(state, action);

/**
 * The redux global app reducer.
 */
const appReducer = Redux.combineReducers({
  shell: reduxShellReducer,
});

const appStore = Redux.createStore(appReducer, {});

/**
 * The combined state for the entire application. This is useful
 * for extracting the slices in each root feature component in a type
 * safe way.
 */
export type AppState = ReturnType<typeof appReducer>;

export type AppAction = ShellAction;

/**
 * The global action dispatcher. Actions which are dispatched
 * result in a new application state being "pushed" down into the
 * component tree.
 *
 * @param action The action which is fed into the global app reducer.
 */
export function appDispatch(action: AppAction): void {
  appStore.dispatch(action);
}

/**
 * The entry point which wires in our `appStore` for the entire app.
 */
const Main: React.FC = () => (
  <Provider store={appStore}>
    <Shell />
  </Provider>
);

export default Main;
