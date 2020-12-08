import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import Api from "../Api";

import { ShellAction } from "./actions";
import { ShellState } from "./state";
import { shellReducer } from "./reducers";

import LogoText from "./components/LogoText";
import Logo from "./components/Logo";
import { useSelector } from "react-redux";
import { AppState } from "..";
import Channel from "../Channel";

const SplashScreen: React.FC = () => (
  <View style={styles.mainContainer}>
    <Logo />
    <LogoText>Dig This! Art Bazaar</LogoText>
    <ActivityIndicator
      size="large"
      color="royalblue"
      style={{ marginTop: 25 }}
    />
  </View>
);

/**
 * The skeleton (or shell) component for the application.
 * It wires up all the features and manages app navigation.
 * Note, navigation is currently managed eagerly, but this can
 * easily be moved to a lazy model (via something like react-navigation) if
 * the app becomes too large to load up front.
 */
const Shell: React.FC = () => {
  const { view } = useSelector((state: AppState) => state.shell);

  let mainView: JSX.Element | null = null;
  switch (view) {
    case "loggedIn":
      mainView = <Channel />;
      break;
    default:
      mainView = <SplashScreen />;
      break;
  }

  return (
    <React.Fragment>
      {mainView}
      <Api />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
});

export { ShellState, ShellAction, shellReducer };
export default Shell;
