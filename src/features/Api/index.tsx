import * as React from "react";
import { useSelector } from "react-redux";

import { AppState, appDispatch } from "..";
import { ArtItem } from "../Channel/state";

import { get, post } from "./makeRequest";

/**
 * A state interface which contains data pertaining to our api layer.
 */
export interface ApiState {
  apiUrl: string;
  clientID: string;
  clientSecret: string;
}

export const initialApiState: ApiState = {
  apiUrl: "https://api.artsy.net/api/tokens/xapp_token",
  clientID: "e9cac3c7e97332c5b843",
  clientSecret: "0b15dedaa824d151f94e965e8c5919cc",
};

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
};

/**
 * A state indicating that the app has collected the authentication token
 * and is now ready to make a request to retrieve the artwork data
 */
type FetchArt = {
  type: "Api.fetchArt";
  xappToken: string;
};

type State = Init | CollectAuthToken | FetchArt;

const formatFetchedArtData: (data: Record<string, any>) => ArtItem[] = (
  data
) => {
  const artworkCollectionData: Record<string, any>[] = data._embedded.artworks;

  return artworkCollectionData.map((artwork) => ({
    category: artwork.category,
    date: artwork.date,
    id: artwork.id,
    imageLink: artwork._links.thumbnail.href,
    medium: artwork.medium,
    title: artwork.title,
  }));
};

const Api: React.FC = () => {
  const { apiUrl, clientID, clientSecret } = useSelector(
    (state: AppState) => state.api
  );

  const [state, setState] = React.useState<State>({
    type: "Api.init",
  });

  React.useEffect(() => {
    switch (state.type) {
      case "Api.init":
        return setState({ type: "Api.collectAuthToken" });
      case "Api.collectAuthToken":
        console.log("hello");
        let token: string;
        const fetchAuthToken = async () => {
          const res = await post(apiUrl, {
            client_id: clientID,
            client_secret: clientSecret,
          });
          token = res.body.token;

          return setState({ type: "Api.fetchArt", xappToken: token });
        };
        fetchAuthToken();
        break;
      case "Api.fetchArt":
        const fetchArtData = async () => {
          const artData = await get(
            "https://api.artsy.net/api/artworks",
            state.xappToken
          );

          return appDispatch({
            type: "Channel.addArt",
            items: formatFetchedArtData(artData),
          });
        };
        fetchArtData();
    }
  }, []);

  return null;
};

export default Api;
