import React from "react";
import * as Redux from "redux";
import { Provider } from "react-redux";

import { ShellState, ShellAction, shellReducer } from "./Shell";
import Shell from "./Shell";
import { ChannelState } from "./Channel/state";
import { ChannelAction } from "./Channel/actions";
import { channelReducer } from "./Channel/reducers";
import { ApiAction } from "./Api/actions";
import { apiReducer } from "./Api/reducers";
import { ApiState } from "./Api/state";

/**
 * The `channelReducer` wrapped in a `Redux.Reducer`.
 */
const reduxApiReducer: Redux.Reducer<ApiState, ApiAction> = (state, action) =>
  apiReducer(state, action);

/**
 * The `channelReducer` wrapped in a `Redux.Reducer`.
 */
const reduxChannelReducer: Redux.Reducer<ChannelState, ChannelAction> = (
  state,
  action
) => channelReducer(state, action);

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
  api: reduxApiReducer,
  channel: reduxChannelReducer,
  shell: reduxShellReducer,
});

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  Redux.compose;

const appStore = Redux.createStore(appReducer, composeEnhancers());

/**
 * The combined state for the entire application. This is useful
 * for extracting the slices in each root feature component in a type
 * safe way.
 */
export type AppState = ReturnType<typeof appReducer>;

export type AppAction = ApiAction | ChannelAction | ShellAction;

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
