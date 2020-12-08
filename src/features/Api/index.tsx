import * as React from "react";
import { useSelector } from "react-redux";

import { AppState, appDispatch } from "..";
import { ArtItem } from "../Channel/state";

import { get, post } from "./makeRequest";

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
  const { xappToken, apiUrl, clientID, clientSecret, step } = useSelector(
    (state: AppState) => state.api
  );

  React.useEffect(() => {
    switch (step) {
      case "init":
        return appDispatch({
          type: "Api.collectAuthToken",
          step: "collectAuthToken",
        });
      case "collectAuthToken":
        console.log("why2");

        let token: string;
        const fetchAuthToken = async () => {
          const res = await post(apiUrl, {
            client_id: clientID,
            client_secret: clientSecret,
          });
          token = res.body.token;

          return appDispatch({ type: "Api.fetchArt", token, step: "fetchArt" });
        };
        fetchAuthToken();
        break;
      case "fetchArt":
        const fetchArtData = async () => {
          const artData = await get(
            "https://api.artsy.net/api/artworks",
            xappToken
          );

          const artworks = formatFetchedArtData(artData);

          if (artworks.length) {
            appDispatch({
              type: "Api.idle",
            });

            appDispatch({
              type: "Channel.addArt",
              items: artworks,
            });

            appDispatch({
              type: "Shell.changeView",
              view: "loggedIn",
            });
          } else {
            // Handle art fetch errors...
          }
        };
        fetchArtData();
    }
  }, [step]);

  return null;
};

export default Api;
