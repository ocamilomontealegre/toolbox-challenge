import { Layout } from "./components/layout/Layout.js";
import { FileList } from "./components/files/FileList.js";
import './App.css';

function App() {
  return (
    <Layout>
      <FileList />
    </Layout>
  );
}

export default App;
