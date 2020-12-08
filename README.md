# DigThis!

DigThis! is a simple app built with React Native (Expo) + Typescript used to
view unique pieces of art from across the world

## Installation

Simply run `yarn`, then either `yarn ios`, `yarn android`, or `yarn web` depending on your platform
preference.

## Structure and other considerations

The DigThis! app describes its modules as feature-first. Each module
has a collection of pure reducers, actions, and a well-defined
state. Actions form the API for which modules can communicate
with one another.

- [The Artsy Public API](https://developers.artsy.net/) provides access to images of historic
  artwork and related information on artsy.net for educational and other non-commercial purposes.

- We utilize a simple state machine (FSM) to drive the app workflow within the shell. While the app
  is making necessary API calls to the Artsy Public API, the shell displays a simple splash screen.
  When the artwork data is loaded, the shell then switches to the `Channel` view.

## License

[MIT](https://choosealicense.com/licenses/mit/)
