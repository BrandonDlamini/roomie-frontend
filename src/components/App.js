import "./../styles/App.css";
import Index from "../pages";
import { Router } from "@reach/router";

function App() {
  return (
    <div>
      <Router>
        <Index path="/" />
      </Router>
    </div>
  );
}

export default App;
