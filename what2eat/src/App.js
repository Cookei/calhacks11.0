import "./App.css";

import { Redirect, Route, Switch } from "wouter";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Listing from "./components/Listing";
import Input from "./pages/Input";
import ListingContainer from "./components/ListingContainer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
        <Route path="/event">
          <Input />
        </Route>
        <Route path="/test">
          <ListingContainer />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
