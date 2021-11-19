import "./../styles/App.css";
import Index from "../pages/Index";
import { Router } from "@reach/router";
import ViewRoomie from "../pages/ViewRoomie";

function App() {
  return (
    <div>
      <ViewRoomie />
    </div>
  );
}

export default App;
//<Router>
// <Index path="/" />
//</Router>
