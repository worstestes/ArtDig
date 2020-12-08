export type Step = "init" | "collectAuthToken" | "fetchArt" | "idle";

/**
 * A state interface which contains data pertaining to our api layer.
 */
export interface ApiState {
  apiUrl: string;
  clientID: string;
  clientSecret: string;
  xappToken: string;
  step: Step;
}
