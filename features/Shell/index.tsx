import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { ShellAction } from "./actions";
import { ShellState } from "./state";
import { shellReducer } from "./reducers";

import LogoText from "./components/LogoText";
import Logo from "./components/Logo";

const SplashScreen: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
    <Logo />
    <LogoText>Boom</LogoText>
  </TouchableOpacity>
);

const LoggedIn: React.FC = () => {
  return (
    <View style={{ backgroundColor: "coral", flex: 1, width: "100%" }}></View>
  );
};

/**
 * The skeleton (or shell) component for our application.
 * It wires up all the features and manages app navigation.
 * Note, navigation is currently managed eagerly, but we can
 * move to a lazy model (via something like react-router) if
 * our app becomes too large to load up front.
 */
const Shell: React.FC = () => {
  const [state, dispatch] = React.useReducer(shellReducer, {
    view: "loggedOut",
  });

  let mainView: JSX.Element | null = null;
  switch (state.view) {
    case "loggedIn":
      mainView = <LoggedIn />;
      break;
    default:
      mainView = (
        <SplashScreen
          onPress={() =>
            dispatch({ type: "Shell.changeView", view: "loggedIn" })
          }
        />
      );
      break;
  }

  return <React.Fragment>{mainView}</React.Fragment>;
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
