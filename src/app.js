import Router from "./routes/route";
import Layout from "./components/layout/layout";
import "../src/styles/index.css";

function App() {
  return (
    <div>
      <Layout />
      <Router />
    </div>
  );
}

export default App;
