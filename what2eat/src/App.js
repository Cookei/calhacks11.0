import "./App.css";

import { Redirect, Route, Switch } from "wouter";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Listing from "./components/Listing";
import Input from "./pages/Input";
import ListingContainer from "./components/ListingContainer"

function App() {
  return (
    <>
      <Navbar />
      <Route path="/">
        <Landing />
      </Route>
      <Route path="/input">
        <Input />
      </Route>
      <Route path="/test">
        <ListingContainer />
      </Route>
    </>
  );
}

export default App;
