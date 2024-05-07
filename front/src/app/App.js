import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import Layout from "../components/layout/Layout";
import FileList from "../components/files/FileList";

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <FileList />
      </Layout>
    </Provider>
  );
}

export default App;
