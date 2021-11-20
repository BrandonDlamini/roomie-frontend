import { Router } from "@reach/router";
import Index from "./pages/Index";
import ViewRoomie from "./pages/ViewRoomie";

const Routes = ({ props }) => {
  return (
    <Router>
      <Index path="/" props={props} />
      <ViewRoomie path="/viewRoomie/:id" props={props} />
    </Router>
  );
};

export default Routes;

//<ViewRoomie path="/booking/:id" props={props} />
