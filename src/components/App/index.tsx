import styles from "./styles.m.styl";
import Navbar from "../Navbar";
import OrdersList from "../../screens/Orders/List";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrdersShow from "~/screens/Orders/Show";
import MainProvider from "../MainProvider/MainProvider";

function Index(): JSX.Element {
  return (
    <MainProvider>
      <Router>
        <div className={styles.app}>
          <Navbar />
          <Switch>
            <Route path="/orders/:id">
              <OrdersShow />
            </Route>
            <Route path="/orders">
              <OrdersList />
            </Route>
          </Switch>
        </div>
      </Router>
    </MainProvider>
  );
}

export default Index;
