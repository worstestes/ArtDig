import { ApiState, Step } from "./state";
import { ApiAction } from "./actions";

/**
 * The initial state used by `apiReducer`.
 */
export const initialApiState: ApiState = {
  xappToken:
    "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZmNkOWZmNjMxOTI1ODQyNDE3MDliMjciLCJleHAiOjE2MDc5OTYxOTEsImlhdCI6MTYwNzM5MTM5MSwiYXVkIjoiNWZjZDlmZjYzMTkyNTg0MjQxNzA5YjI3IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVmY2VkODlmOWQ5YWI3N2VhYzk4MTc4NSJ9.p8DEyvdIxPTaVrVNnyY0uWKXiy6qkHM6hRkvubbJkKk",
  apiUrl: "https://api.artsy.net/api/tokens/xapp_token",
  clientID: "e9cac3c7e97332c5b843",
  clientSecret: "0b15dedaa824d151f94e965e8c5919cc",
  step: "init",
};

/**
 * A pure function which takes the current `state` and an `action` and transforms
 * the channel `state`.
 */
export function apiReducer(
  state: ApiState = initialApiState,
  action: ApiAction
) {
  switch (action.type) {
    case "Api.collectAuthToken":
      return { ...state, step: action.step };
    case "Api.fetchArt":
      return { ...state, xappToken: action.token, step: action.step };
    default:
      return state;
  }
}
