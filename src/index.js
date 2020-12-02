import React from "react";
import { render } from "react-dom";
import App from "./app";
import { GlobalStyles } from "./global-styles";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/configureStore";

render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <App />
      </PersistGate>
    </Provider>
  </>,
  document.getElementById("root")
);
