/**
 * The initial state for the component.
 */
type Init = {
  type: "Api.init";
};

/**
 * A state indicating that the app is collecting the authentication
 * token that can be used to make API requests
 */
type CollectAuthToken = {
  type: "Api.collectAuthToken";
  step: "collectAuthToken";
};

/**
 * A state indicating that the app has collected the authentication token
 * and is now ready to make a request to retrieve the artwork data
 */
type FetchArt = {
  type: "Api.fetchArt";
  step: "fetchArt";
  token: string;
};

type Idle = {
  type: "Api.idle";
};

/**
 * The action types which are used to transform the state
 * for the `Api` component.
 *
 * @see `apiReducer` for the state machine and transitions.
 */
export type ApiAction = Init | CollectAuthToken | FetchArt | Idle;
