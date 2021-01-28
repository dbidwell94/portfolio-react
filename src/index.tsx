import React from "react";
import ReactDOM from "react-dom";
import App from "components/index";
import { Provider } from "react-redux";
import store from "src/state";
import { ThemeProvider } from "styled-components";
import { theme } from "components/shared/globalTheme";
import "./public/less/index.less";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
