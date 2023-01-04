import React from "react";
import { store } from "../store";
import { Provider } from "react-redux";
import PageBuilder from "../modules/pagebuilder/pages/PageBuilder";

function App() {
  return (
    <Provider store={store}>
      <PageBuilder />
    </Provider>
  );
}
export default App;
